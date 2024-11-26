const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "laksidu",
    desc: "sed msg",
    react: "🧑",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please name")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
   
let desc = `
====================••••••••==========

ඔව් ආදරේ කියන්නෙ
පරිස්සම් කරන එකට තමයි,
පරිස්සම් කරන්නෙ ආදරේ හින්දා තමයි,

ඉතින් ආදරේ කියන්නෙම පරිස්සම් කරන එකට තමයි...!❤‍🩹🥺

ස්තූතිය....!

*NAME=LAKSIDU NIMSARA MAHESH❤‍🩹🥺*
*AGE-17❤‍🩹🥺*
*FROME=ANURADHAPURA❤‍🩹🥺*


@CRATE BY LAKSIDU NIMSARA
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek})
