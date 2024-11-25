const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//==========================================- MAIN - CONFIGS -==================================================================
SESSION_ID: process.env.SESSION_ID || "enter your session",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
PREFIX: process.env.PREFIX || ".",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "➺ѕเℓεɳƭ_ℓσѵε૨࿐",
  //========================================- OTHER - CONFIGS -=====================================================================
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
//==========================================- API-CONFIGS -==========================================================
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
//------------------------------------------------------------------------------------------------------------------
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/RQOPG85.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "
╒✦•=============•••••••••============•✦
│ *CREATER* : *LAKSIDU NIMSARA*
│ *VERSION* : *ᴠ.2.5.0*
│ *UPTIME*  :  46 seconds
│ *ʀᴀᴍ ᴜꜱᴀɢᴇ*  : 50.30MB / 63276MB
│ *HOST NAME* : ac3ac771-cc71-45cd-90c1-9a05856f9107
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
> QUEEN-ISHU 💜 
",
};
