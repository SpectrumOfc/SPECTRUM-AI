import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import ytdl from 'ytdl-core';
import axios from 'axios';
import yts from 'yt-search';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) throw '*[❗] Uso incorrecto del comando, ingrese un enlace / link de YouTube.*';  

  let youtubeLink = args[0].includes('youtube') ? args[0] : null;

  if (!youtubeLink) {
    const index = parseInt(args[0]) - 1;
    if (index >= 0 && Array.isArray(global.videoList) && global.videoList.length > 0) {
      const matchingItem = global.videoList.find((item) => item.from === m.sender);
      if (matchingItem && index < matchingItem.urls.length) {
        youtubeLink = matchingItem.urls[index];
      } else {
        throw `*[❗] Enlace no encontrado. Realiza la búsqueda con ${usedPrefix}playlist <texto>*`;
      }
    }
  }

  const { key } = await conn.sendMessage(m.chat, {text: `*_⏳Procesando su audio...⏳_*`}, {quoted: m});
  
  try {
    const yt = await youtubedl(youtubeLink).catch(async () => await youtubedlv2(youtubeLink));
    const audioData = yt.audio['128kbps'];
    const dl_url = audioData.download;
    const title = yt.title;
    const size = audioData.fileSizeH;

    await conn.sendFile(m.chat, dl_url, `${title}.mp3`, null, m, false, { mimetype: 'audio/mpeg' });
    await conn.sendMessage(m.chat, { text: '*[✔] Audio descargado exitosamente.*', edit: key }, { quoted: m });
  } catch (error) {
    console.error("Error en la descarga directa de audio:", error);
    await conn.sendMessage(m.chat, { text: '*[❌] No fue posible descargar el audio.*', edit: key }, { quoted: m });
  }
};

handler.command = /^(audio|fgmp3|dlmp3|getaud|yt(a|mp3))$/i;
export default handler;
