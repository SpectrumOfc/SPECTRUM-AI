function handler(m) {
  const data = global.owner.filter(([id, , isCreator]) => id && isCreator);
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m);
  
  // Envía un mensaje de texto diciendo "hola" después de enviar los contactos
  this.sendMessage(m.chat, 'hola', m);
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
