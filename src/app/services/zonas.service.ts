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
        "descripcion":"Hola",
        "icono":"masks-theater",
        "proximamente":false
      },

    ]
  }

}
