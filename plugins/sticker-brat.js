import fs from 'fs';
import WSF from "wa-sticker-formatter";

const handler = async (m, { conn, args, text, usedPrefix, command }) => {
    // Captura el texto o mensaje citado, si existe
    let messageText = text || (m.quoted && (m.quoted.text || m.quoted.caption || m.quoted.description)) || '';
    
    if (!messageText) {
        m.reply(`˜”*°• 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 | 𝐁𝐑𝐀𝐓 •°*”˜\n🚨 𝐔𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐩𝐞𝐫𝐨 𝐝𝐞 𝐥𝐚 𝐦𝐚𝐧𝐞𝐫𝐚 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐚.\n\n✅ 𝐄𝐉𝐄𝐌𝐏𝐋𝐎:\n.𝐛𝐫𝐚𝐭 (𝐭𝐞𝐱𝐭𝐨)`);
        return;
    }

    // URL de la imagen del sticker basada en el texto
    let stickerUrl = `https://mxmxk-helper.hf.space/brat?text=${messageText}`;

    try {
        // Función para crear el sticker
        const createSticker = async (url, packName = "Sticker Pack", authorName = "Author") => {
            const options = {
                type: "full",
                pack: packName,
                author: authorName,
                categories: [""],
            };
            return await new WSF.Sticker(url, options).build();
        };

        // Crea el sticker y envíalo
        let sticker = await createSticker(stickerUrl);
        await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m);
    } catch (error) {
        console.error(error);
        m.reply("Hubo un problema al crear el sticker.");
    }
};

handler.help = ['brat'];
handler.tags = ['sticker'];
handler.command = /^(brat)$/i;

export default handler;
