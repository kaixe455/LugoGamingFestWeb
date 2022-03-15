import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticia';
import { CategoriasService } from './categorias.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private categoriasService : CategoriasService) { }

  getNoticias() : Noticia[] {


    return [
      {"id":1,
        "titulo":"LUGO GAMING FEST saca a la venta sus entradas y contará con Wismichu como embajador del evento.",
        "subtitulo":"Wismichu aterriza en la ciudad gallega como imagen de lo que será el mayor evento gaming del norte.",
        "url_imagen":"./assets/imagenes_noticias/noticia_wismichu.jpg",
        "categoria":[this.categoriasService.getCategoriaById(1)],
        "contenido":"<p><b>Lugo Gaming Fest</b> anuncia la salida de las entradas para el evento y se encuentran disponibles en su <a href='https://lugogamingfest.es/' target='_blank'>página web</a>. El festival que tendrá lugar en el Palacio de Feiras e Congresos de Lugo los días <b>23</b> y <b>24</b> de <b>abril</b>, durante el cual se podrá disfrutar de un amplio catálogo de actividades, entre las que se encuentran:</p><br><ul><li>Competiciones oficiales del Circuito Tormenta</li><li>Exhibición de Freestyle de la mano de Gallos del Norte</li><li>Exhibición de Freestyle de la mano de Gallos del Norte</li><li>Música en directo</li><li>Zona de actividades para toda la familia</li><li>Ponencias relacionadas con el mundo de los videojuegos</li></ul><br><b>WISMICHU SERÁ EL EMBAJADOR DE LUGO GAMING FEST</b><br><p>Ismael Prego, conocido en Youtube y Twitch como <b><a href='https://twitter.com/Wismichu' target='_blank'>Wismichu</a></b>, será el embajador del evento lucense. Esto le da un valor añadido al festival, ya que los visitantes podrán <b>conocer en persona</b> a uno de los mayores referentes gallegos del sector gaming.</p><p>Con esto, el festival gamer de la ciudad de Lugo crece cada día a pasos agigantados. En las próximas semanas conoceréis alguna actividad más relacionada con él, así como información detallada sobre el evento. Toda la información estará <b>disponible en las redes sociales de <a href='https://linktr.ee/LugoGamingFest' target='_blank' >Lugo Gaming Fest</a>.</b></p>",
        "fx_publicacion_fx": "03/03/2022"
      },
      {"id":2,
      "titulo":"Lugo gaming fest será una de las paradas del circuito tormenta.",
      "subtitulo":"El evento acogerá una de las paradas de League of Legends y Valorant, durante los días 23 y 24 de abril.",
      "url_imagen":"./assets/imagenes_noticias/Noticia_Circuito.jpg",
      "categoria":[this.categoriasService.getCategoriaById(1)],
      "contenido":"<p>Lugo Gaming Fest será una de las paradas de Circuito Tormenta de 2022, tanto en League of Legends como en Valorant. Tras dos años de espera vuelven los eventos presenciales y por lo tanto podremos volver a sentir la emoción de estas competiciones de cerca. Las paradas ,catalogadas como Tier 2, tendrán una fase clasificatoria online y una fase final presencial en ambos juegos. Los equipos irán acumulando puntos con estas paradas que les servirán para optar a clasificar a la Liga Nexo.</p><p>Las fases finales se disputarán de manera presencial en el evento durante los días 23 y 24 de abril. Dichas finales, estarán precedidas de unos clasificatorios online que serán anunciados en los próximos días.</p><p>Además, ya conocemos el resto de paradas del circuito, catalogadas en función de su naturaleza, Tier 1 (Presencial), Tier 2 (Online/Presencial) y Tier 3 (Online).</p><p><li>Tier 1: Granada Gaming, y Gamepolis</li><li>Tier 2: Málaga Open, Sevilla Gaming Experience y Canarias Game Show.</li><li>Tier 3: Secret Tournament.</li></p><p>Sin límite de participantes, los equipos podrán probar suerte para sumar puntos en el ranking,por lo que os animamos a participar. Aquellos interesados en formar parte de esta competición estad atentos a las redes sociales de Lugo Gaming Fest y del Circuito Tormenta.</p><p>Sin duda alguna, tenemos un bonito año por delante donde podremos disfrutar de grandes competiciones gracias al Circuito Tormenta.</p>",
      "fx_publicacion_fx": "26/02/2022"
      },
      {"id":3,
      "titulo":"Lugo se prepara para acoger Lugo Gaming Fest",
      "subtitulo":"El evento tendrá lugar los días 23 y 24 de abril en el Pazo de Feiras e Congresos.",
      "url_imagen":"./assets/imagenes_noticias/Noticia_inicial.png",
      "categoria":[this.categoriasService.getCategoriaById(2)],
      "contenido":"<p>Oxygen Gaming presenta Lugo Gaming Fest, un evento quese celebrará los días 23 y 24 de abril en el Pazo de Feiras e Congresos de Lugo y que pretende poner la ciudad gallega en el mapa como referente nacional en la industria de los videojuegos. El mundo gamer no para de crecer y es imprescindible contar con lugares de encuentro para los jugadores. Para ello, el festival juntará una amplia oferta de actividades con el apoyo de creadores de contenido y empresas.</p><p>Durante el evento se podrá disfrutar de competiciones para las diferentes comunidades, ponencias realizadas por parte de distintos profesionales y actividades en las cuáles el asistente tendrá una experiencia más cercana al sector de los videojuegos.</p><p>En las próximas semanas podréis ir descubriendo más información a través de las redes sociales y de la página web de Lugo Gaming Fest. Por supuesto, el festival se adaptará a las restricciones y medidas de seguridad ante la Covid-19 que la Xunta de Galiza haya establecido en ese momento.</p>",
      "fx_publicacion_fx":"24/01/2022"
      }
    ].sort((a,b) => ( new Date(a.fx_publicacion_fx).getTime() - new Date(b.fx_publicacion_fx).getTime()))
  }
  getNoticiaById(id : number) : Noticia {
    return this.getNoticias()[id-1]
  }
}
