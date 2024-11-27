const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
 //=======================================SEARCH SONG==========================================   
    
let desc = `
*╔══════✮❁•°♛°•❁✮ ══════╗*
❤️️𝐈𝐒𝐇𝐔 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑❤️️
*╚══════✮❁•°❀°•❁✮══════╝*
*─── ･ ｡ﾟ☆: *.☽ .*:☆ﾟ. ───*
💜 *Title:* ${data.title} 
💜 *Duration:* ${data.timestamp} 
💜 *Views:* ${data.views} 
💜 *Uploaded On:* ${data.ago} 
💜 *Link:* ${data.url} 
*─── ･ ｡ﾟ☆: *.☽ .*:☆ﾟ. ───*

.° ༘🎧⋆🖇𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐘𝐎𝐔𝐑 𝐒𝐎𝐍𝐆.° ༘🎧⋆˚ෆ

*©CREATED BY LAKSIDU NIMSARA*
╚═════════✮❁•°♛°•❁✮ ═════════╝
> *QUEEN-ISHU* 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});


let down = await fg.yta(url)
let downloadUrl = down.dl_url

//=============================================DOWBLOAD SONG=====================================
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*QUEEN ISHU MD*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})

cmd({
    pattern: "darama",
    alias: ["video"],
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*╔══════✮❁•°♛°•❁✮ ══════╗*
❤️️𝐈𝐒𝐇𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑❤️️
*╚══════✮❁•°❀°•❁✮══════╝*
*─── ･ ｡ﾟ☆: *.☽ .*:☆ﾟ. ───*
💜 *Title:* ${data.title} 
💜 *Duration:* ${data.timestamp} 
💜 *Views:* ${data.views} 
💜 *Uploaded On:* ${data.ago} 
💜 *Link:* ${data.url} 
*─── ･ ｡ﾟ☆: *.☽ .*:☆ﾟ. ───*

.° ༘🎧⋆🖇₊˚ෆ𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐘𝐎𝐔𝐑 𝐕𝐈𝐃𝐄𝐎.° ༘🎧⋆🖇₊˚ෆ

*©CREATED BY LAKSIDU NIMSARA*
╚══════════════✮❁•°♛°•❁✮ ══════════════╝
> *QUEEN-ISHU* 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});


let down = await fg.ytv(url)
let downloadUrl = down.dl_url

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*QUEEN ISHU MD*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('Could not song/video. Please try again later')
}
})
