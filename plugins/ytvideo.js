const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "video",
    desc: "downlode videos",
    category: "downlode",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a title*")
const search = await yts(q)
const data = search.video[0];
const url = data.url

let desc = `
*===================*
_*💛 VIDEO DＯＷＮＬＯＤＥＲ 💛*_
*==================*

💛 *Title :* ${search.all[0].title}

💛 *Description :* ${search.all[0].description}

💛 *Duration :* ${search.all[0].timestamp}

💛 *Ago :* ${search.all[0].ago}

💛 *Views :* ${search.all[0].views}

💛 *URL :* ${search.all[0].url}

_💛ᴜᴘʟᴏᴅɪɴɢ ʏᴏᴜʀ ᴀᴜᴅɪᴏ ꜰɪʟʟ💛_


> QUEEN ISHU MD
`

await conn.sendMessage(from,{image:{url: search.all[0].thumbnail},caption:desc},{quoted:mek})


let down = await fg.ytv(url)
let downloadUrl = down.dl_url


await conn.sendMessage(from, {
  video: {url: downloadUrl},
mimetype: "video/mp4"},{quoted:mek}) 

}catch(e){
console.log(e)
reply(`${e}`)
}
}
)
