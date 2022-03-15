import { Categoria } from "./categoria";

export class Noticia {
    id:     number;
    titulo: string;
    subtitulo:   string;
    url_imagen: string;
    contenido: string;
    categoria: Categoria[];
    fx_publicacion_fx: string;

    constructor () {
      this.id = 0
      this.titulo = ''
      this.subtitulo = ''
      this.url_imagen = ''
      this.contenido = ''
      this.categoria = []
      this.fx_publicacion_fx = ''
    }
  }
