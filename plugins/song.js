const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please  url song")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 

let desc = 'laksidu downlod'

await comn .sendMessage(frome,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
  
///download audio 

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(frome,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
 
}catch(e){
console.log(e)
reply('eroor')
}
})
