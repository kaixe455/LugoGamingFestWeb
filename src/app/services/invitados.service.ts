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
        "nombre":"Gazir",
        "ocupacion":"Freestyler",
        "imagen":"./assets/fotos_invitados/gazir.png",
        "twitter":"GazirGPS",
        "instagram":"gazir_ysb",
        "spotify":""
      },
      {"id":3,
        "nombre":"Tirpa",
        "ocupacion":"Freestyler",
        "imagen":"./assets/fotos_invitados/tirpa.png",
        "twitter":"Tirpa_dm7",
        "instagram":"Tirpa_dm7",
        "spotify":""
      },
      {"id":4,
      "nombre":"DfreezeGIRL",
      "ocupacion":"Embajadora",
      "imagen":"./assets/fotos_invitados/DfreezeGIRL.png",
      "twitter":"nereaandrade7",
      "instagram":"nereaandrade7",
      "spotify":""
      },
      {"id":5,
      "nombre":"Dualview",
      "ocupacion":"Embajador",
      "imagen":"./assets/fotos_invitados/Dualview.png",
      "twitter":"dualviewyt",
      "instagram":"dualview_yt",
      "spotify":""
      },
      {"id":6,
      "nombre":"Fromguer",
      "ocupacion":"Influencer",
      "imagen":"./assets/fotos_invitados/Fromguer.png",
      "twitter":"Fromguer",
      "instagram":"Fromguer",
      "spotify":""
      },
      { "id":7,
        "nombre":"SelediaCosplay",
        "ocupacion":"Cosplayer",
        "imagen":"./assets/fotos_invitados/Seledia.jpg",
        "twitter":"SelediaCosplay",
        "instagram":"SelediaCosplay",
        "spotify":""
       },
      { "id":8,
        "nombre":"NewBeatOrder",
        "ocupacion":"Productor & DJ",
        "imagen":"./assets/fotos_invitados/NewBeatOrder.png",
        "twitter":"",
        "instagram":"NewBeatOrder",
        "spotify":"0gQDOj4OisQbTq7FUEziea?si=vgtSq7B2Rt2SmQbYPbxPpQ"
      },
      { "id":9,
        "nombre":"HelanyaH",
        "ocupacion":"Influencer",
        "imagen":"./assets/fotos_invitados/helanyah.png",
        "twitter":"HelanyaH",
        "instagram":"HelanyaH",
        "spotify":""
      },
      { "id":10,
        "nombre":"DirectoD2",
        "ocupacion":"Influencer",
        "imagen":"./assets/fotos_invitados/D2.png",
        "twitter":"DirectoD2",
        "instagram":"DirectoD2",
        "spotify":""
      }
    ]
  }
}
