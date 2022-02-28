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
        "descripcion":"Hola",
        "icono":"code",
        "proximamente":true
      },
      { "id":3,
        "nombre":"RV",
        "descripcion":"Hola",
        "icono":"vr",
        "proximamente":true
      },
      { "id":4,
        "nombre":"ARENA PC'S",
        "descripcion":"Hola",
        "icono":"desktop",
        "proximamente":true
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
