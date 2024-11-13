import axios from 'axios'

let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply('🚨 𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐥𝐢𝐧𝐤 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐭𝐢𝐤𝐭𝐨𝐤 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.')
try {
let api = await axios.get(`https://api.ryzendesu.vip/api/downloader/ttdl?url=${encodeURIComponent(args[0])}`)
let json = api.data
let { data, processed_time:proceso } = json
let { play:video, duration:duracion, title: titulo, music:audio } = data

let JT = `🔎 𝐓í𝐭𝐮𝐥𝐨: ${titulo}
✅ 𝐏𝐫𝐨𝐜𝐞𝐬𝐨: ${proceso}
⏰ 𝐃𝐮𝐫𝐚𝐜𝐢ó𝐧: ${duracion}`
await conn.sendFile(m.chat, video, 'HasumiBotFreeCodes.mp4', JT, m)
await conn.sendFile(m.chat, audio, 'HasumiBotFreeCodes.mp3', null, m)
} catch (error) {
console.error(error)    
}}

handler.command = /^(tiktok)$/i

export default handler
