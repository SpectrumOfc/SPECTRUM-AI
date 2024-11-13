import fs from 'fs';
import WSF from "wa-sticker-formatter";

var handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let ps = text 
        ? text 
        : m.quoted && (m.quoted.text || m.quoted.caption || m.quoted.description)
        ? m.quoted.text || m.quoted.caption || m.quoted.description
        : '';

    if (!ps) throw m.reply(`*• Ejemplo :* ${usedPrefix + command} *[texto]*`);

    let res = `https://mxmxk-helper.hf.space/brat?text=${ps}`;

    try {
        async function sticker(img, url, packname, author, categories = [""]) {
            const stickerMetadata = {
                type: "full",
                pack: packname,
                author,
                categories,
            };
            return await new WSF.Sticker(img ? img : url, stickerMetadata).build();
        }

        var stikerp = await sticker(null, res, "PackName", "AuthorName");  // Asegúrate de poner "PackName" y "AuthorName" o cambiarlo
        await conn.sendFile(m.chat, stikerp, 'sticker.webp', '', m);
    } catch (e) {
        console.log(e);
        await m.reply("Ocurrió un error al generar el sticker");
    }
};

handler.help = ['brat'];
handler.tags = ['sticker'];
handler.command = /^(brat)$/i;

export default handler;
