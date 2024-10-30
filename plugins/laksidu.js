const {cmd , commands} = require('../command')

cmd({
    pattern: "owener",
    desc: "about",
    react: "❕",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*╒✦=====QUEEN ISHU MD OWENR=====✦*

*+94761470396*

> QUEEN ISHU MD
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
