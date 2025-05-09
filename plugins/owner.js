const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/xqkj0Jkr/9557.jpg' }, // Image URL from your request
            caption: `┏━━━━━━━━━━━━━━ 
┃𝐉𝐔𝐍𝐈𝐎𝐑-𝐌𝐃
┃𝐎𝐖𝐍𝐄𝐑'𝐒
┃𝐃𝐄𝐓𝐀𝐈𝐋𝐒
┗━━━━━━━━━━━━━━━ 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ᴄʀᴇᴀᴛᴏʀ = 𖥘⚡ 𝐌𝐈𝐆𝐇𝐓𝐘 𝐃𝐄 𝐉𝐔𝐍𝐈𝐎𝐑 ⚡𖥘 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ᴏᴡɴᴇʀ = https://wa.me/254780015430 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ᴡʜᴀᴛsᴀᴘᴘ = https://whatsapp.com/channel/0029Vao1lnR1nozDF8jBNh3B
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ʙᴏᴛ ʀᴇᴘᴏ = https://github.com/Viniznimco/JUNIOR-MD 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ʏᴏᴜᴛᴜʙᴇ = https://youtube.com/@Viniznimco?si=jtHyERObmqci0YEo  
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓄂𝕚𝕥𝕩.𝐃𝐄 𝗝𝗨𝗡𝗜𝗢𝗥 🔥༽༼ ♡ `, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363404846707306@newsletter',
                    newsletterName: '𒁂𓄂❥.𝐉𝐔𝐍𝐈𝐎𝐑 𝐌𝐃 🔥༽༼࿐',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Viniznimco/JUNIOR-MD-DATA/raw/refs/heads/main/autovoice/menunew.m4a' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
