/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu
 DONT COPY
*/

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    alias: ["mp3","yt"],
    desc: "To download songs.",
    react: "🎧",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or title*")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*╔══════✮❁•°♛°•❁✮ ══════╗*
❤️️𝐈𝐒𝐇𝐔 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑❤️️
*╚══════✮❁•°❀°•❁✮═══════╝*
*╔══════✮❁•°♛°•❁✮ ══════╗*
*║*
*║⭕➥Title:${data.tile}* 
*║⭕➥Duration:${data.timestamp}* 
*║⭕➥*Views:* ${data.views}*
*║⭕➥Url* ${data.url}* 
*║⭕➥*Uploaded On:* ${data.ago}* 
*║*
*╚══════✮❁•°❀°•❁✮═══════╝*
*╔══════✮❁•°♛°•❁✮ ═══════╗*
*║*  𝗖𝗵𝗼𝗼𝘀𝗲 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗙𝗼𝗿𝗺𝗮𝘁
*╚══════✮❁•°♛°•❁✮ ═══════╝*

*╔══════✮❁•°♛°•❁✮ ═══════╗*
*║*⭕➥*1 𝘼𝙐𝘿𝙄𝙊 𝙁𝙄𝙇𝙀🎧*
*║*⭕➥*2 𝗗𝗢𝗖𝗨𝗠𝗡𝗘𝗧 𝗙𝗜𝗟𝗘📁*
*╚══════✮❁•°♛°•❁✮ ═══════╝*
 *𝙌𝙐𝙀𝙀𝙉 𝙄𝙎𝙃𝙐 𝙈𝘿*
`

const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '*𝙌𝙐𝙀𝙀𝙉 𝙄𝙎𝙃𝙐 𝙈𝘿*', mimetype: 'audio/mpeg'},{ quoted: mek });
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '*𝙌𝙐𝙀𝙀𝙉 𝙄𝙎𝙃𝙐 𝙈𝘿*', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});


//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or title*")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*╔══════✮❁•°♛°•❁✮ ══════╗*
❤️️𝐈𝐒𝐇𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑❤️️
*╚══════✮❁•°❀°•❁✮═══════╝*
*╔══════✮❁•°♛°•❁✮ ══════╗*
*║*
*║⭕➥Title:${data.tile}* 
*║⭕➥Duration:${data.timestamp}* 
*║⭕➥*Views:* ${data.views}*
*║⭕➥Url* ${data.url}* 
*║⭕➥*Uploaded On:* ${data.ago}* 
*║*
*╚══════✮❁•°❀°•❁✮═══════╝*
*╔══════✮❁•°♛°•❁✮ ═══════╗*
*║*  𝗖𝗵𝗼𝗼𝘀𝗲 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗙𝗼𝗿𝗺𝗮𝘁
*╚══════✮❁•°♛°•❁✮ ═══════╝*
*╔══════✮❁•°♛°•❁✮ ═══════╗*
*║*⭕➥*1 𝗩𝗜𝗗𝗘𝗢 𝙁𝙄𝙇𝙀🎧*
*║*⭕➥*2 𝗗𝗢𝗖𝗨𝗠𝗡𝗘𝗧 𝗙𝗜𝗟𝗘📁*
*╚══════✮❁•°♛°•❁✮ ═══════╝*
 *𝙌𝙐𝙀𝙀𝙉 𝙄𝙎𝙃𝙐 𝙈𝘿*
`

 const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                        await conn.sendMessage(from, { video : { url:downloadvUrl }, caption: '*𝙌𝙐𝙀𝙀𝙉 𝙄𝙎𝙃𝙐 𝙈𝘿*', mimetype: 'video/mp4'},{ quoted: mek });
                        break;
                    case '2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloadvdocUrl }, caption: '*𝙌𝙐𝙀𝙀𝙉 𝙄𝙎𝙃𝙐 𝙈𝘿*', mimetype: 'video/mp4', fileName:data.title + ".mp4" }, { quoted: mek });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
