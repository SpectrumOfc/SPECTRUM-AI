let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!args[0]) throw `🚨 𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐚𝐩𝐩 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`
let res = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${args[0]}`);
let result = await res.json();
let { name, size, lastUpdate, icon } = result;
let URL = result.dllink
let packe = result.package
let texto = `♫♪♩·.¸¸.· 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 | 𝐀𝐏𝐊 ·.¸¸.·♩♪♫\n
     📩 𝐍𝐨𝐦𝐛𝐫𝐞: ${name}
     ⚖️ 𝐏𝐞𝐬𝐨: ${size}
     📦 𝐏𝐚𝐜𝐤𝐚𝐠𝐞: ${packe}
     🗓️ 𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨: ${lastUpdate}
    
🍭 Enviando archivo por favor espere suelo ser lenta..`
await conn.sendFile(m.chat, icon, name + '.jpg', texto, m)

await conn.sendMessage(m.chat, { document: { url: URL }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: ''}, { quoted: m });
}
handler.tags = ['descargas']
handler.help = ['apkmod']
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i
handler.register = false
handler.estrellas = 1

export default handler
