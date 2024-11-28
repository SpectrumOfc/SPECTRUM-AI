import axios from 'axios';
import yts from 'yt-search';
import franc from 'franc-min'; // Para detección de idiomas
import translate from '@vitalets/google-translate-api'; // Para traducción automática

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw m.reply(`Ejemplo de uso: ${usedPrefix + command} Joji Ew`);

    // Detectar el idioma del texto
    const lang = franc(text);
    let translatedText = text;

    // Si no es inglés, traducir al inglés
    if (lang !== 'eng') {
        try {
            const translation = await translate(text, { to: 'en' });
            translatedText = translation.text;
            m.reply(`Texto detectado en idioma: ${lang}. Traducido a inglés: ${translatedText}`);
        } catch (error) {
            m.reply("Error al traducir el texto. Por favor, verifica la entrada.");
            console.error(error);
            return;
        }
    }

    // Buscar en YouTube
    let results = await yts(translatedText);
    let tes = results.all[0];

    const baseUrl = 'https://cuka.rfivecode.com';
    const cukaDownloader = {
        youtube: async (url, exct) => {
            const format = ['mp3', 'mp4'];
            try {
                const response = await fetch(`${baseUrl}/download`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url, format: exct }),
                });

                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error:', error);
                return { success: false, message: error.message };
            }
        },
    };

    let dataos = await cukaDownloader.youtube(tes.url, 'mp3');
    console.log(dataos);

    if (!dataos || !dataos.downloadUrl) {
        throw new Error("Error en la respuesta del API. Verifica la URL o el formato solicitado.");
    }

    let { title, thumbnail, quality, downloadUrl } = dataos;

    m.reply(`_✧ Enviando ${title} (${quality})_\n\n> ${tes.url}`);

    // Validar el thumbnail
    if (!thumbnail) throw new Error("El campo 'thumbnail' está vacío o no es válido.");
    const file = await conn.getFile(thumbnail);

    const doc = {
        audio: { url: downloadUrl },
        mimetype: 'audio/mp4',
        fileName: `${title}.mp3`,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                mediaType: 2,
                mediaUrl: tes.url,
                title: title,
                sourceUrl: tes.url,
                thumbnail: file.data,
            },
        },
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });
};

handler.help = ['play'];
handler.tags = ['downloader'];
handler.command = /^(play|song)$/i;

export default handler;
