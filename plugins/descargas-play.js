import ytdl from 'ytdl-core';
import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) throw `Uso correcto: ${usedPrefix + command} <título del audio>`;
    
    const searchResults = await yts(text);
    const video = searchResults.videos[0];
    if (!video) throw 'No se encontraron resultados para tu búsqueda.';

    const audioStream = ytdl(video.url, { filter: 'audioonly' });

    await conn.sendMessage(
      m.chat,
      {
        audio: audioStream,
        mimetype: 'audio/mpeg',
        fileName: `${video.title}.mp3`,
        contextInfo: {
          externalAdReply: {
            title: video.title,
            body: 'Audio descargado desde YouTube',
            mediaUrl: video.url,
            sourceUrl: video.url,
          },
        },
      },
      { quoted: m }
    );

    m.reply(`🎵 Enviando el audio: *${video.title}*`);
  } catch (error) {
    console.error(error);
    m.reply(`❌ Error: ${error.message || error}`);
  }
};

handler.help = ['play'];
handler.tags = ['downloader'];
handler.command = /^(play|song)$/i;

export default handler;
