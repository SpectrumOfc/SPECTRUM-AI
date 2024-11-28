import yt_dlp

def download_audio(url):
    # Definir las opciones para descargar solo el audio en formato MP3
    ydl_opts = {
        'format': 'bestaudio/best',  # Mejor calidad de audio
        'postprocessors': [{
            'key': 'FFmpegAudioConvertor',  # Convertir el audio a MP3
            'preferredcodec': 'mp3',
            'preferredquality': '192',  # Calidad de 192 kbps
        }],
        'outtmpl': '%(title)s.%(ext)s',  # Guardar el archivo con el nombre del video
    }

    # Descargar el archivo usando yt-dlp
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])  # Descargar el contenido desde la URL

# Ejemplo de uso
url_video = 'https://www.youtube.com/watch?v=VIDEO_ID'
download_audio(url_video)
