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
        "icono":"gamepad"
      },
      { "id":2,
        "nombre":"DEVELOPERS",
        "descripcion":"Hola",
        "icono":"gamepad"
      },
      { "id":3,
        "nombre":"RV",
        "descripcion":"Hola",
        "icono":"gamepad"
      },
      { "id":4,
        "nombre":"ARENA PC'S",
        "descripcion":"Hola",
        "icono":"gamepad"
      },
      { "id":5,
        "nombre":"COSPLAY",
        "descripcion":"Hola",
        "icono":"gamepad"
      },

    ]
  }

}
