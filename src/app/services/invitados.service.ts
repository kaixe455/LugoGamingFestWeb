import { Injectable } from '@angular/core';
import { Invitado } from '../model/invitado';

@Injectable({
  providedIn: 'root'
})
export class InvitadosService {

  constructor() { }

  getInvitados() : Invitado[] {


    return [
      {"id":1,
        "nombre":"Wismichu",
        "ocupacion":"Embajador",
        "imagen":"./assets/fotos_invitados/wismichu.png",
        "twitter":"Wismichu",
        "instagram":"Wismichu",
        "spotify":""
      },
      {"id":2,
      "nombre":"HelanyaH",
      "ocupacion":"Influencer",
      "imagen":"./assets/fotos_invitados/helanyah.png",
      "twitter":"HelanyaH",
      "instagram":"HelanyaH",
      "spotify":""
      },
      {"id":3,
      "nombre":"DirectoD2",
      "ocupacion":"Influencer",
      "imagen":"./assets/fotos_invitados/D2.png",
      "twitter":"DirectoD2",
      "instagram":"DirectoD2",
      "spotify":""
      },
      {"id":4,
        "nombre":"SelediaCosplay",
        "ocupacion":"Cosplayer",
        "imagen":"./assets/fotos_invitados/Seledia.jpg",
        "twitter":"SelediaCosplay",
        "instagram":"SelediaCosplay",
        "spotify":""
      }

    ]
  }
}
