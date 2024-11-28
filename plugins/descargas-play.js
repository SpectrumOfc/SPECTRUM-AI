let dataos = await cukaDownloader.youtube(tes.url, 'mp3');
console.log('Respuesta del API:', dataos);

if (!dataos || !dataos.downloadUrl) {
    throw new Error("Error en la respuesta del API. Verifica la URL o el formato solicitado.");
}

let { title, thumbnail, quality, downloadUrl } = dataos;

m.reply(`_✧ Enviando ${title} (${quality})_\n\n> ${tes.url}`);

// Validar el thumbnail
if (!thumbnail || !thumbnail.startsWith('http')) {
    console.warn("El thumbnail no es válido. Usando un thumbnail predeterminado.");
    thumbnail = 'https://example.com/default-thumbnail.jpg'; // Reemplaza con un thumbnail predeterminado
}

let file;
try {
    file = await conn.getFile(thumbnail);
} catch (error) {
    console.error("Error al obtener el archivo del thumbnail:", error);
    file = { data: null }; // Usar un valor nulo si falla
}

const doc = {
    audio: { url: downloadUrl },
    mimetype: 'audio/mp4',
    fileName: `${title}.mp3`,
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            mediaType: 2,
            mediaUrl: tes.url,
            title: title,
            sourceUrl: tes.url,
            thumbnail: file.data || null, // Manejar nulo si `file.data` no está disponible
        },
    },
};

await conn.sendMessage(m.chat, doc, { quoted: m });
