import axios from 'axios';
import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    // Validar que el usuario proporcione un título
    if (!text) throw `Uso correcto: ${usedPrefix + command} <título del audio>`;
    
    // Buscar en YouTube
    const searchResults = await yts(text);
    const video = searchResults.videos[0]; // Tomar el primer resultado

    if (!video) throw 'No se encontraron resultados para tu búsqueda.';

    const downloadUrl = `https://api.example.com/download/audio?url=${encodeURIComponent(video.url)}`; // Cambia la API por una funcional
    const response = await axios.get(downloadUrl);

    if (!response.data.success) throw 'No se pudo descargar el audio.';

    // Enviar el audio al usuario
    const { title, audioUrl } = response.data;

    await conn.sendMessage(
      m.chat,
      {
        audio: { url: audioUrl },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        contextInfo: {
          externalAdReply: {
            title: title,
            body: 'Audio descargado desde YouTube',
            mediaUrl: video.url,
            sourceUrl: video.url,
          },
        },
      },
      { quoted: m }
    );

    m.reply(`🎵 Enviando el audio: *${title}*`);
  } catch (error) {
    console.error(error);
    m.reply(`❌ Error: ${error.message || error}`);
  }
};

// Configuración del comando
handler.help = ['play'];
handler.tags = ['downloader'];
handler.command = /^(play|song)$/i;

export default handler;
