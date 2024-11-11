function handler(m) {
  // Lista fija de propietarios con nombre y número
  const data = [
    ['+52 427 413 0309', '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑'],
    ['+52 427 413 0309', '𝐕𝐄𝐍𝐓𝐀𝐒 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐃𝐎 ✅'],
    ['+52 522 731 307 252', '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 - 𝟐'],
    ['+52 573 235 515 945', '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 - 𝟑'],
    ['+52 519 646 619 50', '𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 - 𝟒']
  ];

  // Enviamos un mensaje con información sobre los propietarios
  let message = "👑 *Lista de Propietarios* 👑\n\n";
  message += "Aquí están los contactos de los propietarios y creadores:\n\n";
  
  // Formateamos la información de los contactos con un subtítulo y breve descripción
  data.forEach(([id, name]) => {
    message += `🔹 *Nombre*: ${name}\n`;
    message += `🔹 *Número*: ${id}\n\n`;
  });

  // Enviamos los contactos de los propietarios
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m);

  // Enviamos el mensaje con la información adicional
  this.sendMessage(m.chat, message, m);
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
