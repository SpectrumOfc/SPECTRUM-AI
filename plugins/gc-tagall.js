const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `${pesan}\n✅𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒: _*${participants.length}*_`;
  let teks = `${oi}\n\n┏・𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 𝐆𝐄𝐍𝐄𝐑𝐀𝐋\n`;
  for (const mem of participants) {
    teks += `┣・👑 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗・𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso)$/i;
handler.admin = true;
handler.group = true;
export default handler;
