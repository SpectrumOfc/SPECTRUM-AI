import { search, download } from 'aptoide-scraper';

const handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  if (!text) {
    m.reply(`❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘢𝘱𝘵𝘰𝘪𝘥𝘦 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`);
    return;
  }

  try {
    const searchA = await search(text);
    
    // Verifica si hay resultados
    if (!searchA || searchA.length === 0) {
      throw new Error("No se encontraron resultados");
    }

    const appData = await download(searchA[0].id);

    const response = `📲 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 𝘼𝙋𝙏𝙊𝙄𝘿𝙀 📲\n\n🔥 𝙉𝙊𝙈𝘽𝙍𝙀: ${appData.name}\n🚀 𝙋𝘼𝘾𝙆𝘼𝙂𝙀: ${appData.package}\n⏳ 𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏..: ${appData.lastup}\n🕋 𝙏𝘼𝙈𝘼Ñ𝙊: ${appData.size}`;
    
    await conn.sendMessage(m.chat, {
      image: { url: appData.icon },
      caption: response
    }, { quoted: m });

    if (appData.size.includes('GB') || parseFloat(appData.size.replace(' MB', '')) > 999) {
      await conn.sendMessage(m.chat, {
        text: '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘭 𝘢𝘳𝘤𝘩𝘪𝘷𝘰 𝘦𝘴 𝘥𝘦𝘮𝘢𝘴𝘪𝘢𝘥𝘰 𝘱𝘦𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘭𝘰 𝘲𝘶𝘦 𝘯𝘰 𝘴𝘦 𝘦𝘯𝘷𝘪𝘢𝘳𝘢.'
      }, { quoted: m });
      return;
    }

    await conn.sendMessage(m.chat, {
      document: { url: appData.dllink },
      mimetype: 'application/vnd.android.package-archive',
      fileName: `${appData.name}.apk`,
      caption: null
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    m.reply(`❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 Error, no se encontraron resultados para su búsqueda.`);
  }
};

handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
