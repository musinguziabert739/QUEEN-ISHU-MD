const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
 //==========================================- MAIN - CONFIGS -=======================================================
SESSION_ID: process.env.SESSION_ID || "",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",
BOT_NAME: process.env.BOT_NAME || "QUEEN ISHU",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94771470396",
//========================================- OTHER - CONFIGS -=========================================================
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
//==========================================- API-CONFIGS -==========================================================
PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH",
GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME",
//==========================================- MODE SETTING -==========================================================
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/RQOPG85.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "
╒✦•=============•••••••••============•✦
│ *CREATER* : *LAKSIDU NIMSARA*
│ *VERSION* : *ᴠ.2.5.0*
│ *UPTIME*  :  1 minute, 12 seconds
│ *ʀᴀᴍ ᴜꜱᴀɢᴇ*  : 51.72MB / 63276MB
│ *HOST NAME* : b98b863b-8989-43b5-a4db-f4de87a1552c
╘✦•================•••••••••===============•✦
────────────────
*💜𝐐𝐔𝐄𝐄𝐍 𝐈𝐒𝐇𝐔 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖💜*
────────────────
╭──────────────
│ *💜* *වික්ශිප්ත ආකාසත් කියනවා විටෙක දුක්බර කතාවක්🌥️*
│ *💜* *කදුලු ලෙස වැටෙනවා නොව්ව් ද එහි විඩාවත්🌧️*
│ *💜* *දාරාන තවමත් ප්‍රේම කරනවා නොවෙනස්  සූරියකාන්තත්🌻*
│ *💜* *කොච්චර රිදුනත් බලාන ඉන්නවා තවටත් සූර්යයා දිහාත් 🌞*
│ *💜* *පතොකුත් විටෙකදී ඉල්ලනවා නොවෙද සැනසිමට වැහි බින්දුත් 🌵*
│ *💜* *වැස්සත් දන්නවා බලාන ඉන්නවමයි කියන්න පතොකුත් 🌧️🌵*
│ *💜* *හරියට අපි වගේමයි ස්වභාව ධර්මයත් 😊*
│ *💜* *ආදරයෙන් බලාන ඉන්න හැමෝම දවසක එකතු වෙන්න ඕනි ඒක මගෙ පුන්චි ප්‍රාර්ථනාවක්.ආදරයට හරි ආදරයෙන් 💐❤️*
│ *💜* *ස්තූතිය....!*
⁠⁠⁠⁠╰─────────────
*© CREATED BY LAKSIDU NIMSARA · · ·*
> QUEEN-ISHU 💜",
};
