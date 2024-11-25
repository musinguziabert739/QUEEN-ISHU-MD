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
ALIVE_MSG: process.env.ALIVE_MSG || "✦•===",
};
