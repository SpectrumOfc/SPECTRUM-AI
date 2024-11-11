import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = imagen4;
  if (user.registered === true) throw `🚨 𝐘𝐚 𝐭𝐞 𝐭𝐞𝐧𝐠𝐨 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬.`;
  if (!Reg.test(text)) throw `˜”*°• 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐑 •°*”˜\n🚨 𝐔𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐩𝐞𝐫𝐨 𝐝𝐞 𝐥𝐚 𝐦𝐚𝐧𝐞𝐫𝐚 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐚.\n\n✅ 𝐄𝐉𝐄𝐌𝐏𝐋𝐎:\n.𝐫𝐞𝐠 𝐍𝐨𝐦𝐛𝐫𝐞.𝐄𝐝𝐚𝐝`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n» 𝘿𝙀𝘽𝙀𝙎 𝙋𝙊𝙉𝙀𝙍 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘳𝘦𝘨 𝘈𝘯𝘨𝘦𝘭𝘪𝘵𝘰.18';
  if (!age) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n» 𝘿𝙀𝘽𝙀𝙎 𝙋𝙊𝙉𝙀𝙍 𝙇𝘼 𝙀𝘿𝘼𝘿\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘳𝘦𝘨 𝘈𝘯𝘨𝘦𝘭𝘪𝘵𝘰.18';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾';
  age = parseInt(age);
  if (age > 100) throw '𝙆𝙝𝙚 𝙘𝙤𝙢𝙤 𝙨𝙞𝙜𝙪𝙚𝙨 𝙫𝙞𝙫𝙤 𝙘𝙤𝙣 𝙚𝙨𝙖 𝙚𝙙𝙖𝙙? 👴🏻';
  if (age < 5) throw '𝙆𝙝𝙚 𝙪𝙣 𝙗𝙚𝙗𝙚 𝙦𝙪𝙚 𝙨𝙖𝙗𝙚 𝙪𝙨𝙖𝙧 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 👶🏼';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏━━━━• 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 •━━━━┓
┃╭──────────────────
┃┊「 📄 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 📄 」
┃├──────────────────
┃┊𝙉𝙊𝙈𝘽𝙍𝙀 
┃┊» ${name}ˣᴮ
┃┊𝙀𝘿𝘼𝘿
┃┊»  ${age} años
┃┊𝙁𝙀𝘾𝙃𝘼
┃┊» ${fecha}
┃╰──────────────────
┗━━━━━━━━•◦ 🤖 ◦•━━━━━━━━┛

𝙉° 𝙎𝙀𝙍𝙄𝙀

 ${sn}`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
