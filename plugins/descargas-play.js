import axios from 'axios';
import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    m.reply(`🚨 𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭í𝐭𝐮𝐥𝐨 𝐝𝐞 𝐥𝐚 𝐦ú𝐬𝐢𝐜𝐚 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`);
    return;
  }

  let searchResults = await yts(text);
  let videoInfo = searchResults.all[0];

  const baseUrl = 'https://cuka.rfivecode.com';
  
  const cukaDownloader = {
    youtube: async (url, format) => {
      try {
        const response = await fetch(`${baseUrl}/download`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url, format })
        });
        
        return await response.json();
      } catch (error) {
        console.error('Error:', error);
        return { success: false, message: error.message };
      }
    },

    tiktok: async (url) => {
      return await downloadHelper(`${baseUrl}/tiktok/download`, url);
    },

    spotify: async (url) => {
      return await downloadHelper(`${baseUrl}/spotify/download`, url);
    }
  };

  // Helper function for TikTok and Spotify downloads
  const downloadHelper = async (endpoint, url) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return { success: false, message: error.message };
    }
  };

  // Download the YouTube video in mp3 format
  let downloadData = await cukaDownloader.youtube(videoInfo.url, "mp3");
  console.log(downloadData);
  
  const { title, thumbnail, quality, downloadUrl } = downloadData;
  m.reply(`♫♪♩·.¸¸.· 𝐏𝐋𝐀𝐘 | 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 ·.¸¸.·♩♪♫\n\n🔎 𝐓𝐈𝐓𝐔𝐋𝐎: ${title} (${quality})\n📎 𝐔𝐑𝐋: ${tes.url}`);

  const audioDoc = {
    audio: { url: downloadUrl },
    mimetype: 'audio/mp4',
    fileName: `${title}.mp3`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: videoInfo.url,
        title: title,
        sourceUrl: videoInfo.url,
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };

  await conn.sendMessage(m.chat, audioDoc, { quoted: m });
};

handler.help = ['play'];
handler.tags = ['downloader'];
handler.command = /^(play|song)$/i;

export default handler;
