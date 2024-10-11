// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {	
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
await conn.sendMessage(m.chat, {
        text: `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 @${m.sender.split`@`[0]}\n𝐄𝐧 𝐮𝐧𝐨𝐬 𝐢𝐧𝐬𝐭𝐚𝐧𝐭𝐞𝐬 𝐭𝐞 𝐥𝐥𝐞𝐠𝐚𝐫𝐚 𝐦𝐢 𝐦𝐞𝐧𝐮 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐨.`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })
  
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `*\`⌜ ＭＥＮＵ | ＣＯＭＰＬＥＴＯ ⌟\`*

*\`╭━〔 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〕━╮\`*
┃➔ *☑𝙑𝙚𝙧𝙨𝙞𝙤𝙣:* 1.0.0
┃➔ *⏰𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤:* ${uptime}
╰━━━━━━━━━━━━━━╯

*\`╭━〔 𝐀𝐂𝐓𝐈𝐕𝐀𝐑|𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 〕━╮\`*
┃➔ ✅ ${usedPrefix}enable
┃➔ ❌ ${usedPrefix}disable
╰━━━━━━━━━━━━━━╯

*\`╭━〔 𝐆𝐑𝐔𝐏𝐎𝐒 〕━╮\`*
┃➔ 🚫 ${usedPrefix}kick
┃➔ 🏠 ${usedPrefix}grupo
┃➔ ⬆️ ${usedPrefix}promote
┃➔ ⬇️ ${usedPrefix}demote
┃➔ 🔗 ${usedPrefix}link
┃➔ 📢 ${usedPrefix}invocar
┃➔ 👋 ${usedPrefix}setwelcome
┃➔ 👋 ${usedPrefix}setbye
┃➔ 🕵️ ${usedPrefix}hidetag
┃➔ 🏷️ ${usedPrefix}tag
┃➔ 👻 ${usedPrefix}fantasmas
┃➔ 👻🚫 ${usedPrefix}kickfantasmas
╰━━━━━━━━━━━━━━╯

*\`╭━━〔 𝐉𝐔𝐄𝐆𝐎𝐒 〕━━╮\`*
┃➔ 📖 ${usedPrefix}pokedex
┃➔ 👨🏼 ${usedPrefix}prostituto <@tag>
┃➔ 👩🏼 ${usedPrefix}prostituta <@tag>
┃➔ 🏳️‍🌈 ${usedPrefix}gay2 <@tag>
┃➔ 👩‍❤️‍👩 ${usedPrefix}lesbiana <@tag>
┃➔ 💦 ${usedPrefix}pajero <@tag>
┃➔ 💦 ${usedPrefix}pajera <@tag>
┃➔ 😈 ${usedPrefix}puto <@tag>
┃➔ 💋 ${usedPrefix}puta <@tag>
┃➔ ✋ ${usedPrefix}manco <@tag>
┃➔ ✋ ${usedPrefix}manca <@tag>
┃➔ 🐀 ${usedPrefix}rata <@tag>
┃➔ 👦🏿 ${usedPrefix}negro <@tag>
┃➔ 👩🏿‍🦰 ${usedPrefix}negra <@tag>
┃➔ 🤢 ${usedPrefix}fea <@tag>
┃➔ 🤢 ${usedPrefix}feo <@tag>
┃➔ 🍑 ${usedPrefix}sinpoto <@tag>
┃➔ 🍒 ${usedPrefix}sintetas <@tag>
┃➔ 🍆 ${usedPrefix}sinpito <@tag>
┃➔ 👨‍👩‍👧‍👦 ${usedPrefix}adoptada <@tag>
┃➔ 👨‍👩‍👧‍👦 ${usedPrefix}adoptado <@tag>
┃➔ 🤖 ${usedPrefix}simisimi
┃➔ ❓ ${usedPrefix}pregunta
┃➔ 📅 ${usedPrefix}cuando
┃➔ 💋 ${usedPrefix}ship5
┃➔ 🫂 ${usedPrefix}abrazo
┃➔ 💋 ${usedPrefix}ship2
┃➔ 🎰 ${usedPrefix}ruleta
┃➔ ♌ ${usedPrefix}zodiac
┃➔ 😡 ${usedPrefix}odio
┃➔ 💋 ${usedPrefix}ship
┃➔ 🎟️ ${usedPrefix}sorteo
┃➔ 💑 ${usedPrefix}minovia
┃➔ 💑 ${usedPrefix}minovio
┃➔ 😏 ${usedPrefix}kchero
┃➔ 😎 ${usedPrefix}kchero
╰━━━━━━━━━━━━━━╯

*\`╭━〔 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 〕━╮\`*
┃➔ ▶️ ${usedPrefix}play
┃➔ ▶️ ${usedPrefix}play.1
┃➔ ▶️ ${usedPrefix}play2.2
┃➔ 🎮 ${usedPrefix}ytv.2
┃➔ 🎮 ${usedPrefix}yta.2
┃➔ 🎧 ${usedPrefix}playlist
┃➔ 🎧 ${usedPrefix}spotify
┃➔ 🎧 ${usedPrefix}spotifydl
┃➔ 🎤 ${usedPrefix}tiktok
┃➔ 🎤 ${usedPrefix}instagram
┃➔ 🎤 ${usedPrefix}mediafire
┃➔ 🎤 ${usedPrefix}gdrive
┃➔ 🎤 ${usedPrefix}twitter
┃➔ 🎮 ${usedPrefix}yta
┃➔ 🎮 ${usedPrefix}ytv
┃➔ 🎮 ${usedPrefix}imagen
┃➔ ⏯️ ${usedPrefix}iaimagen
┃➔ ⏯️ ${usedPrefix}pinteres
┃➔ 🎧 ${usedPrefix}igstory
╰━━━━━━━━━━━━━━╯

*\`╭━〔 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 〕━╮\`*
┃➔ 🕵️‍♂️ ${usedPrefix}xnxxsearch
┃➔ 📂 ${usedPrefix}tiktoksearch
┃➔ 🌐 ${usedPrefix}google
┃➔ 🔎 ${usedPrefix}letra
┃➔ 🗂️ ${usedPrefix}wikipedia
┃➔ 🌐 ${usedPrefix}ytsearch
┃➔ 🕵️‍♂️ ${usedPrefix}playstore
┃➔ 🔎 ${usedPrefix}mercadolibre
┃➔ 📂 ${usedPrefix}pornhubsearch
╰━━━━━━━━━━━━━━╯

*\`╭━〔 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 〕━╮\`*
┃➔ 🔇 ${usedPrefix}mute
┃➔ 🎷 ${usedPrefix}trad
┃➔ 🧮 ${usedPrefix}calc
┃➔ 🗑️ ${usedPrefix}del
┃➔ 🎶 ${usedPrefix}whatmusic
╰━━━━━━━━━━━━━━╯

*\`╭━〔 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 〕━╮\`*
┃➔ 🔫 ${usedPrefix}crimen
┃➔ 📝 ${usedPrefix}reg
┃➔ ⛏️ ${usedPrefix}minar
┃➔ 🪓 ${usedPrefix}buy
┃➔ 💎 ${usedPrefix}work
┃➔ 🏗️ ${usedPrefix}mendigar
╰━━━━━━━━━━━━━━╯

*\`╭━━〔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 〕━━╮\`*
┃➔ 🛠️ ${usedPrefix}s
┃➔ 🏷️ ${usedPrefix}emojimix
┃➔ ⚙️ ${usedPrefix}attp
┃➔ 🔩 ${usedPrefix}qc
╰━━━━━━━━━━━━━━╯`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://drive.google.com/uc?export=view&id=1nGesJvAWNYVFLj_cWemY43zz73Z0ybTb`)).buffer()  
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈',
//body: 'ᴅᴇᴠᴇʟᴏᴘᴇʀ: ʙᴇɴᴊᴀᴍɪɴ',
thumbnail: img,
sourceUrl: 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await m.react('✅')	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(allmenu|allmenu\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
