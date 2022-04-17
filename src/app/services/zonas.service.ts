import { Injectable } from '@angular/core';
import { Zona } from '../model/zona';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  constructor() { }

  getZonas() : Zona[] {


    return [
      { "id":1,
        "nombre":"ACTIVIDADES",
        "descripcion":"Hola",
        "icono":"users",
        "proximamente":false
      },
      { "id":2,
        "nombre":"DEVELOPERS",
        "descripcion":"<h3>En el evento tendremos una zona reservada para desarrolladores de videojuegos.</h3> <p>Allí diferentes empresas podrán exponer sus trabajos de una manera más cercana y los visitantes podrán tener una experiencia única. No solo podrán probar los juegos sino informarse del todo el proceso que siguen hasta sacar sus trabajos al público.</p>",
        "icono":"code",
        "proximamente":false
      },
      { "id":3,
        "nombre":"RV",
        "descripcion":"Hola",
        "icono":"vr",
        "proximamente":true
      },
      { "id":4,
        "nombre":"ARENA PCS",
        "descripcion":"<h3>En la zona de arena, patrocinada por Beehive, tendremos diferentes torneos a lo largo de los dos días.</h3> <p>Estos <i>opens</i> se han organizado con el fin de hacer la experiencia de los visitantes más intensa y así acercarlos un poco más al ámbito competitivo. Rocket League, League of Legends o Teamfight Tactics son algunos de los juegos en los que podréis probar vuestras habilidades.</p>",
        "icono":"desktop",
        "proximamente":false
      },
      { "id":5,
        "nombre":"COSPLAY",
        "descripcion":"<h3>Dispondremos de una Zona Cosplay donde podréis disfrutar el arte de nuestros invitados al evento. Cada uno de ellos tendrá un espacio donde podréis adquirir sus trabajos.</h3><p>¡Además no dejes de pasar la oportunidad de inmortalizar el momento en nuestro Photocall!</p>",
        "icono":"masks-theater",
        "proximamente":false
      },

    ]
  }

  getZonaById(id : number) : Zona {
    return this.getZonas()[id-1]
  }

}
