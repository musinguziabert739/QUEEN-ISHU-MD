const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//==========================================- MAIN - CONFIGS -==================================================================
SESSION_ID: process.env.SESSION_ID || "enter your session",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "",
MODE: process.env.MODE || "",
PREFIX: process.env.PREFIX || ".",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "",
  //========================================- OTHER - CONFIGS -=====================================================================
AUTO_VOICE: process.env.AUTO_VOICE || "",
AUTO_STICKER: process.env.AUTO_STICKER || "",
AUTO_REPLY: process.env.AUTO_REPLY || "",
ANTI_LINK: process.env.ANTI_LINK || "",
ANTI_BAD: process.env.ANTI_BAD || "",
FAKE_RECORDING: process.env.FAKE_RECORDING || "",
AUTO_REACT: process.env.AUTO_REACT || "",
//==========================================- API-CONFIGS -==========================================================
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
//------------------------------------------------------------------------------------------------------------------
ALIVE_IMG: process.env.ALIVE_IMG || "",
ALIVE_MSG: process.env.ALIVE_MSG || "",
};
