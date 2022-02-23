export class Noticia {
    id:     number;
    titulo: string;
    subtitulo:   string;
    url_imagen: string;
    contenido: string;
    categoria: string;

    constructor () {
      this.id = 0
      this.titulo = ''
      this.subtitulo = ''
      this.url_imagen = ''
      this.contenido = ''
      this.categoria = ''
    }
  }
