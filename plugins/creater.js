const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "👨‍💻", 
    alias: ["silent", "king"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
       
        const ownerNumber = '+94760698006'; 
        const ownerName = '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐'; 
        const organization = '𝓐𝓛𝓕𝓗𝓐 𝓣𝓔𝓡𝓜'; 

     //==============================================================================================================   
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:1.0\n' +
                      `FN:𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐\n` +  // Full Name
                      `ORG:𝓐𝓛𝓕𝓗𝓐 𝓣𝓔𝓡𝓜;\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=+94760698006.replace('+', '')}:+94760698006\n` +  // WhatsApp ID and number
                      'END:VCARD';

        //==========================================================================================================
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐,
                contacts: [{ vcard }]
            }
        });

        //==========================================================================================================
        await conn.sendMessage(from, {
            text: `This is the owner's contact: 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐`,
            contextInfo: {
                mentionedJid: +94760698006.replace('+94760698006') + '+94760698006@s.whatsapp.net'], 
                quotedMessageId: sentVCard.key.id 
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek });
    }
});
