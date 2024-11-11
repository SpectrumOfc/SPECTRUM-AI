import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw 'hola';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '🚨 𝐄𝐥 𝐧ú𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞 𝐞𝐬 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨, 𝐞𝐧 𝐜𝐚𝐬𝐨 𝐧𝐨 𝐥𝐨 𝐫𝐞𝐜𝐮𝐞𝐫𝐝𝐞𝐬 𝐮𝐭𝐢𝐥𝐢𝐳𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .𝐦𝐲𝐧𝐬';
  user.registered = false;
  m.reply(`🚨 𝐋𝐢𝐬𝐭𝐨, 𝐮𝐬𝐭𝐞𝐝 𝐟𝐮𝐞 𝐛𝐨𝐫𝐫𝐚𝐝𝐨 𝐝𝐞 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬.`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;
