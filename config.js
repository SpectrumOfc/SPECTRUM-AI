import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs' 
import * as cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios' 
import moment from 'moment-timezone'
import { es } from './lib/idiomas/total-idiomas.js'

//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a ⋅.━━━━ ⊰

global.owner = [ 
['524274130309', '𝐒𝐎𝐏𝐎𝐑𝐓𝐄 - 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈', true],
['524274130309'],
['524274130309'],
['524274130309'],
['524274130309'],
['524274130309'],
['524274130309'],
['524274130309'],
['524274130309'], 
['524274130309'],
['524274130309'],
['524274130309'],
['524274130309'],
['524274130309']]

global.mods = ['524274130309']
global.prems = ['524274130309'],
global.suittag = ['524274130309']

global.botNumberCode = ""
global.confirmCode = "" 

global.lenguajeGB = es

global.openai_key = 'sk-...OzYy' /* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW' /* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */
global.Key360 = ['964f-0c75-7afc']//key de violetics
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'GataDios'
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')

global.mods = [] 
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

global.packname = '𝐒𝐓𝐈𝐂𝐊𝐄𝐑- 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈'
global.author = ''

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = "" + hour;

global.lb = '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈'
global.vs = '1.5.7'
global.vsJB = '1.5.0'
global.yt = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.ig = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.md = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.fb = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'

global.nna = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.nn = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.nnn = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.nnnt = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.nnnt2 = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.nnntt = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.nnnttt = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.nnntttt = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.asistencia = 'wa.me/5214274130309'

global.rg = '*[🛑 INFORMATION 🛑]*\n\n'
global.resultado = rg
global.ag = '*[🛑 INFORMATION 🛑]*\n\n'
global.advertencia = ag
global.iig = '*[🛑 INFORMATION 🛑]*\n\n'
global.informacion = iig
global.fg = '*[🛑 INFORMATION 🛑]*\n\n'
global.fallo = fg
global.mg = '*[🛑 INFORMATION 🛑]*\n\n'
global.mal = mg
global.eeg = '*[🛑 INFORMATION 🛑]*\n\n'
global.envio = eeg
global.eg = '*[🛑 INFORMATION 🛑]*\n\n'
global.exito = eg

global.wm = '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈'
global.igfg = '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈'
global.wait = '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'
global.nomorown = '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.img = 'https://i.imgur.com/H6AofpJl.jpg'
global.img2 = 'https://i.imgur.com/R1uVUId.jpeg'

global.redesMenu = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnntttt, md, ig, lb, fb, yt]
global.gataMenu = [img, img2]
global.gataVidMenu = ['https://a.uguu.se/RqbiXfNg.mp4', 'https://a.uguu.se/uoZBfOyV.mp4', './media/menus/Menuvid1.mp4']
global.gataImg = [imagen1, imagen2, imagen3]

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
key: {
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Hmm`,
'seconds': '999999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
}}}

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.multiplier = 90 // Cuanto más alto, más difícil subir de nivel
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🧬 Nivel',
limit: lenguajeGB.eDiamante(),
exp: lenguajeGB.eExp(),
bank: '🏦 Banco',
diamond: lenguajeGB.eDiamantePlus(),
health: '❤️ Salud',
kyubi: lenguajeGB.eMagia(),
joincount: lenguajeGB.eToken(),
emerald: lenguajeGB.eEsmeralda(),
stamina: lenguajeGB.eEnergia(),
role: '💪 Rango',
premium: '🎟️ Premium',
pointxp: '📧 Puntos Exp',
gold: lenguajeGB.eOro(),
trash: lenguajeGB.eBasura(),
crystal: '🔮 Cristal : Crystal',
intelligence: '🧠 Inteligencia ',
string: lenguajeGB.eCuerda(),
keygold: '🔑 Llave de Oro',
keyiron: '🗝️ Llave de Hierro',
emas: lenguajeGB.ePinata(),
fishingrod: '🎣 Caña de Pescar',
gems: '🍀 Gemas',
magicwand: '⚕️ Varita Mágica',
mana: '🪄 Hechizo',
agility: '🤸‍♂️ Agilidad',
darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
iron: lenguajeGB.eHierro(),
rock: lenguajeGB.eRoca(),
potion: lenguajeGB.ePocion(),
superior: '💼 Superior',
robo: '🚔 Robo',
upgrader: '🧰 Aumentar Mejora',
wood: lenguajeGB.eMadera(),
strength: '🦹‍ ♀️ Fuerza',
arc: '🏹 Arco : Arc',
armor: '🥼 Armadura : Armor',
bow: '🏹 Super Arco : Super Bow',
pickaxe: '⛏️ Pico',
sword: lenguajeGB.eEspada(),
common: lenguajeGB.eCComun(),
uncoommon: lenguajeGB.ePComun(),
mythic: lenguajeGB.eCMistica(),
legendary: lenguajeGB.eClegendaria(),
petFood: lenguajeGB.eAMascots(), //?
pet: lenguajeGB.eCMascota(),//?
bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
ayam: '🐓 Pollo',
babi: '🐖 Puerco',
Jabali: '🐗 Jabalí',
bull: '🐃 Toro : Bull',    
buaya: '🐊 Cocodrilo : Alligator',    
cat: lenguajeGB.eGato(),    
centaur: lenguajeGB.eCentauro(),
chicken: '🐓 Pollo : Chicken',
cow: '🐄 Vaca : Cow', 
dog: lenguajeGB.ePerro(),
dragon: lenguajeGB.eDragon(),
elephant: '🐘 Elefante : Elephant',
fox: lenguajeGB.eZorro(),
giraffe: '🦒 Jirafa : Giraffe',
griffin: lenguajeGB.eAve(), //Mascota : Griffin',
horse: lenguajeGB.eCaballo(),
kambing: '🐐 Cabra : Goat',
kerbau: '🐃 Búfalo : Buffalo',
lion: '🦁 León : Lion',
money: lenguajeGB.eGataCoins(),
monyet: '🐒 Mono : Monkey',
panda: '🐼 Panda',
snake: '🐍 Serpiente : Snake',
phonix: '🕊️ Fénix : Phoenix',
rhinoceros: '🦏 Rinoceronte : Rhinoceros',
wolf: lenguajeGB.eLobo(),
tiger: '🐅 Tigre : Tiger',
cumi: '🦑 Calamar : Squid',
udang: '🦐 Camarón : Shrimp',
ikan: '🐟 Pez : Fish',
fideos: '🍝 Fideos : Noodles',
ramuan: '🧪 Ingrediente NOVA : Ingredients',
knife: '🔪 Cuchillo : Knife'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
let emott = {
level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
pointxp: '📧', gold: '👑',
trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
fideos: '🍝', ramuan: '🧪', knife: '🔪'
}
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}

global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
let emottt = {
exp: lenguajeGB.eExp(), limit: lenguajeGB.eDiamante(), diamond: lenguajeGB.eDiamantePlus(), joincount: lenguajeGB.eToken(),
emerald: lenguajeGB.eEsmeralda(), berlian: lenguajeGB.eJoya(), kyubi: lenguajeGB.eMagia(), gold: lenguajeGB.eOro(),
money: lenguajeGB.eGataCoins(), tiketcoin: lenguajeGB.eGataTickers(), stamina: lenguajeGB.eEnergia(),
potion: lenguajeGB.ePocion(), aqua: lenguajeGB.eAgua(), trash: lenguajeGB.eBasura(), wood: lenguajeGB.eMadera(),
rock: lenguajeGB.eRoca(), batu: lenguajeGB.ePiedra(), string: lenguajeGB.eCuerda(), iron: lenguajeGB.eHierro(),
coal: lenguajeGB.eCarbon(), botol: lenguajeGB.eBotella(), kaleng: lenguajeGB.eLata(), kardus: lenguajeGB.eCarton(),
eleksirb: lenguajeGB.eEletric(), emasbatang: lenguajeGB.eBarraOro(), emasbiasa: lenguajeGB.eOroComun(), rubah: lenguajeGB.eZorroG(),
sampah: lenguajeGB.eBasuraG(), serigala: lenguajeGB.eLoboG(), kayu: lenguajeGB.eMaderaG(), sword: lenguajeGB.eEspada(),
umpan: lenguajeGB.eCarnada(), healtmonster: lenguajeGB.eBillete(), emas: lenguajeGB.ePinata(), pancingan: lenguajeGB.eGancho(),
pancing: lenguajeGB.eCanaPescar(),
common: lenguajeGB.eCComun(), uncoommon: lenguajeGB.ePComun(), mythic: lenguajeGB.eCMistica(),
pet: lenguajeGB.eCMascota(),//?
gardenboxs: lenguajeGB.eCJardineria(),//?
legendary: lenguajeGB.eClegendaria(),
anggur: lenguajeGB.eUva(), apel: lenguajeGB.eManzana(), jeruk: lenguajeGB.eNaranja(), mangga: lenguajeGB.eMango(), pisang: lenguajeGB.ePlatano(),
bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
centaur: lenguajeGB.eCentauro(), griffin: lenguajeGB.eAve(), kucing: lenguajeGB.eGato(), naga: lenguajeGB.eDragon(),
fox: lenguajeGB.eZorro(), kuda: lenguajeGB.eCaballo(), phonix: lenguajeGB.eFenix(), wolf: lenguajeGB.eLobo(),
anjing: lenguajeGB.ePerro(),
petFood: lenguajeGB.eAMascots(), //?
makanancentaur: lenguajeGB.eCCentauro(), makanangriffin: lenguajeGB.eCAve(),
makanankyubi: lenguajeGB.eCMagica(), makanannaga: lenguajeGB.eCDragon(), makananpet: lenguajeGB.eACaballo(), makananphonix: lenguajeGB.eCFenix()
}
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}

global.rpgshopp = { //Tienda
emoticon(string) {
string = string.toLowerCase()
let emotttt = {
exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
money: '🐱', tiketcoin: '🎫', stamina: '✨',
potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
pancing: '🎣',
common: '📦', uncoommon: '🥡', mythic: '🗳️',
pet: '📫',//?
gardenboxs: '💐',//?
legendary: '🎁',
anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
petFood: '🍖', //?
makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
}
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emotttt[results[0][0]]
}}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Se actualizo 'config.js'"))
import(`${file}?update=${Date.now()}`)
})
