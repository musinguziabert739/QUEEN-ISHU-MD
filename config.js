const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/RQOPG85.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "╒✦•=============•••••••••============•✦│ CREATER : LAKSIDU NIMSARA│ VERSION : ᴠ.2.5.0│ ╘✦•==============•••••••••===========•✦",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "QUEEN ISHU",
};
