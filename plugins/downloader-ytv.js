import fg from 'api-dylux';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

let limit = 350;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) throw `˜”*°• 𝐘𝐓𝐌𝐏𝟒 •°*”˜\n🚨 𝐔𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐩𝐞𝐫𝐨 𝐝𝐞 𝐥𝐚 𝐦𝐚𝐧𝐞𝐫𝐚 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐚.\n\n✅ 𝐄𝐉𝐄𝐌𝐏𝐋𝐎:\n.𝐲𝐭𝐦𝐩𝟒 (𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞)`;
    if (!args[0].match(/youtu/gi)) throw `🚨 𝐄𝐥 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐞𝐬 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨.`;

    let chat = global.db.data.chats[m.chat];

    try {
        let q = args[1] || '360p';
        let v = args[0];
        const yt = await youtubedl(v).catch(async () => await youtubedlv2(v));
        const dl_url = await yt.video[q].download();
        const title = await yt.title;
        const size = await yt.video[q].fileSizeH;

        if (size.split('MB')[0] >= limit) {
            return m.reply(`♫♪♩·.¸¸.· 𝐘𝐓𝐌𝐏𝟒 | 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 ·.¸¸.·♩♪♫\n\n▢ *⚖️Peso* : ${size}\n▢ *🎞️Calidad* : ${q}\n\n▢ _El archivo supera el límite de descarga_ *+${limit} MB*`);
        }

        conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *FG YTDL*
  
▢ *📌Título* : ${title}
▢ *📟 Ext* : mp4
▢ *🎞️Calidad* : ${q}
▢ *⚖️Peso* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument });

    } catch {        
        m.reply(`✳️ Error al descargar el video intenta con otro`); 
    }
};

handler.help = ['ytmp4 <link yt>'];
handler.tags = ['dl'];
handler.command = ['ytmp4', 'fgmp4'];
handler.diamond = true;

export default handler;
