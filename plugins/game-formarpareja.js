const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`${toM(a)}, 𝐝𝐞𝐛𝐞𝐫í𝐚𝐬 𝐜𝐚𝐬𝐚𝐫𝐭𝐞 𝐜𝐨𝐧 ${toM(b)}, 𝐡𝐚𝐜𝐞𝐧 𝐮𝐧𝐚 𝐡𝐞𝐫𝐦𝐨𝐬𝐚 𝐩𝐚𝐫𝐞𝐣𝐚. 💍💓`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
