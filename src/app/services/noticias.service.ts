import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor() { }

  getNoticias() : Noticia[] {


    return [
      {"id":1,
        "titulo":"Hola",
        "subtitulo":"hola",
        "url_imagen":"./assets/imagenes_noticias/gaminghome.jpg",
      "categoria":"hola",
      "contenido":"hola"},
      {"id":2,
      "titulo":"Hola2",
      "subtitulo":"hola2",
      "url_imagen":"./assets/imagenes_noticias/gaminghome.jpg",
      "categoria":"hola2",
      "contenido":"hola2"},
      {"id":3,
      "titulo":"Hola3",
      "subtitulo":"hola3",
      "url_imagen":"./assets/imagenes_noticias/gaminghome.jpg",
      "categoria":"hola3",
      "contenido":"hola3"},

    ]
  }
}
