let handler = async (m, { conn, text, participants}) => {
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
if (!m.quoted) return m.reply(`🚨 𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐢𝐞𝐧𝐝𝐨 𝐚 𝐮𝐧 𝐦𝐞𝐧𝐬𝐚𝐣𝐞.`)
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
handler.help = ['tag']
handler.tags = ['group']
handler.command = /^(totag|tag)$/i
handler.admin = true
handler.group = true

export default handler
