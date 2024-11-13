import fs from 'fs';
import WSF from "wa-sticker-formatter";

const handler = async (m, { conn, args, text, usedPrefix, command }) => {
    // Captura el texto o mensaje citado, si existe
    let messageText = text || (m.quoted && (m.quoted.text || m.quoted.caption || m.quoted.description)) || '';
    
    if (!messageText) {
        m.reply(`*• Ejemplo:* ${usedPrefix + command} *[texto]*`);
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
