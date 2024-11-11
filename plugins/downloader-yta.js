import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import { bestFormat, getUrlDl } from '../lib/y2dl.js';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) throw '*[❗] Uso incorrecto del comando, ingrese un enlace / link de YouTube.*';
  let enviando;
  if (enviando) return;
  enviando = true;
  let youtubeLink = '';

  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    const index = parseInt(args[0]) - 1;
    if (index >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find((item) => item.from === m.sender);
        if (matchingItem) {
          if (index < matchingItem.urls.length) {
            youtubeLink = matchingItem.urls[index];
          } else {
            throw `*[❗] No se encontró un enlace para ese número, por favor ingrese un número entre el 1 y el ${matchingItem.urls.length}*`;
          }
        } else {
          throw `*[❗] Para poder hacer uso del comando de esta forma (${usedPrefix + command} <numero>), por favor realiza la búsqueda de videos con el comando ${usedPrefix}playlist <texto>*`;
        }
      } else {
        throw `*[❗] Para poder hacer uso del comando de esta forma (${usedPrefix + command} <numero>), por favor realiza la búsqueda de videos con el comando ${usedPrefix}playlist <texto>*`;
      }
    }
  }

  const { key } = await conn.sendMessage(m.chat, { text: `*_⏳ Se está procesando su audio... ⏳_*` }, { quoted: m });

  try {
    const formats = await bestFormat(youtubeLink, 'audio');
    const dl_url = await getUrlDl(formats.url);
    const buff = await getBuffer(dl_url.download);
    const yt_1 = await youtubedl(youtubeLink).catch(async (_) => await youtubedlv2(youtubeLink));
    const ttl_1 = `${yt_1?.title || 'Tu_audio_descargado'}`;
    const fileSizeInMB = (buff.byteLength / (1024 * 1024)).toFixed(2);

    if (fileSizeInMB > 50) {
      await conn.sendMessage(m.chat, { document: buff, caption: `*▢ Título:* ${ttl_1}\n*▢ Peso Del Audio:* ${fileSizeInMB} MB`, fileName: ttl_1 + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m });
      await conn.sendMessage(m.chat, { text: `*[ ✔ ] Audio descargado y enviado exitosamente como documento (por tamaño: ${fileSizeInMB} MB).*`, edit: key }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, { audio: buff, caption: `*▢ Título:* ${ttl_1}\n*▢ Peso Del Audio:* ${fileSizeInMB} MB`, fileName: ttl_1 + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m });
      await conn.sendMessage(m.chat, { text: '*[ ✔ ] Audio descargado y enviado exitosamente.*', edit: key }, { quoted: m });
    }
    enviando = false;

  } catch (err) {
    console.error('Error en descarga de audio:', err);
    await conn.sendMessage(m.chat, { text: `*[ ❌ ] El audio no pudo ser descargado ni enviado, vuelva a intentarlo.*`, edit: key }, { quoted: m });
  }
};

handler.command = /^(audio|fgmp3|dlmp3|getaud|yt(a|mp3))$/i;
export default handler;

const getBuffer = async (url, options) => {
  try {
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });
    return res.data;
  } catch (e) {
    console.error(`Error al obtener buffer: ${e}`);
  }
};
