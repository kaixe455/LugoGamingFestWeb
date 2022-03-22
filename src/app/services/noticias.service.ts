import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
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
        "categoria":[this.categoriasService.getCategoriaById(3)],
        "contenido":"<p><b>Lugo Gaming Fest</b> anuncia la salida de las entradas para el evento y se encuentran disponibles en su <a href='https://lugogamingfest.es/' target='_blank'>página web</a>. El festival que tendrá lugar en el Palacio de Feiras e Congresos de Lugo los días <b>23</b> y <b>24</b> de <b>abril</b>, durante el cual se podrá disfrutar de un amplio catálogo de actividades, entre las que se encuentran:</p><br><ul><li>Competiciones oficiales del Circuito Tormenta</li><li>Exhibición de Freestyle de la mano de Gallos del Norte</li><li>Exhibición de Freestyle de la mano de Gallos del Norte</li><li>Música en directo</li><li>Zona de actividades para toda la familia</li><li>Ponencias relacionadas con el mundo de los videojuegos</li></ul><br><b>WISMICHU SERÁ EL EMBAJADOR DE LUGO GAMING FEST</b><br><p>Ismael Prego, conocido en Youtube y Twitch como <b><a href='https://twitter.com/Wismichu' target='_blank'>Wismichu</a></b>, será el embajador del evento lucense. Esto le da un valor añadido al festival, ya que los visitantes podrán <b>conocer en persona</b> a uno de los mayores referentes gallegos del sector gaming.</p><p>Con esto, el festival gamer de la ciudad de Lugo crece cada día a pasos agigantados. En las próximas semanas conoceréis alguna actividad más relacionada con él, así como información detallada sobre el evento. Toda la información estará <b>disponible en las redes sociales de <a href='https://linktr.ee/LugoGamingFest' target='_blank' >Lugo Gaming Fest</a>.</b></p>",
        "fx_publicacion_fx": "2022/03/03"
      },
      {"id":2,
      "titulo":"Lugo gaming fest será la segunda parada del circuito tormenta.",
      "subtitulo":"Ya podéis inscribiros en la parada para participar tanto en League of Legends como en VALORANT.",
      "url_imagen":"./assets/imagenes_noticias/Noticia_Circuito.jpg",
      "categoria":[this.categoriasService.getCategoriaById(3)],
      "contenido":"<p>Lugo Gaming Fest está catalogada como parada de Tier 2. Contará con dos clasificatorios online y una final presencial tanto en League of Legends como en VALORANT. También se disputará en ambos juegos un torneo online, donde solo se obtendrán puntos para el Circuito Tormenta.</p><br><strong>Clasificatorios online.</strong><br><p>En ambos juegos se disputarán dos clasificatorios, los cuales nos darán 4 ganadores cada uno. Estos equipos se enfrentaran en una fase final hasta que solo queden dos de ellos, los cuales viajarán a Lugo para disputar la Gran Final los días 23 y 24 de abril.</p><br><ul><li>Primer clasificatorio: 8 de abril.</li><li>Segundo clasificatorio: 9 de abril.</li><li>Fase Final: 10 de abril.</li></ul><br><br><img src='./assets/imagenes_noticias/clasificatorios.jpg' alt='Calendario clasificatorios' style='max-width: 100%;'><br><br><strong>Final presencial. </strong><br><p>Tanto en League of Legends como en VALORANT tendremos dos equipos finalistas que lo darán todo por alzarse con la victoria en Lugo. Las finales se distribuirán de la siguiente manera:</p><br><ul><li>23 de abril: Final de League Of Legends.</li><li>24 de abril: Final de VALORANT.</li></ul><br><br><img src='./assets/imagenes_noticias/finales.jpg' alt='Calendario finales evento' style='max-width: 100%;'><br><br><strong>Torneo online.</strong><br> <p>Este torneo contará con un solo clasificatorio y una fase final de donde obtendremos un equipo ganador. Esta modalidad solo contará para sumar puntos en la clasificación del Circuito Tormenta. (En League of Legends y VALORANT)</p><br><ul><li>Clasificatorio: 16 de abril.</li><li>Fase final: 17 de abril.</li></ul><br><br><img src='./assets/imagenes_noticias/online.jpg' alt='Calendario torneo online' style='max-width: 100%;'><br><br><strong>- PRIZE POOL -</strong><br><p>En Lugo Gaming Fest contaremos con el siguiente prize pool para cada una de las finales:</p><br><ul><li>League of Legends: 1000€</li><li>VALORANT: 1000€</li></ul><br><br><img src='./assets/imagenes_noticias/prizepool.jpg' alt='Premios del torneo' style='max-width: 100%;'><br><br>",
      "fx_publicacion_fx": "2022/02/26"
      },
      {"id":3,
      "titulo":"Lugo se prepara para acoger Lugo Gaming Fest",
      "subtitulo":"El evento tendrá lugar los días 23 y 24 de abril en el Pazo de Feiras e Congresos.",
      "url_imagen":"./assets/imagenes_noticias/Noticia_inicial.png",
      "categoria":[this.categoriasService.getCategoriaById(2)],
      "contenido":"<p>Oxygen Gaming presenta Lugo Gaming Fest, un evento quese celebrará los días 23 y 24 de abril en el Pazo de Feiras e Congresos de Lugo y que pretende poner la ciudad gallega en el mapa como referente nacional en la industria de los videojuegos. El mundo gamer no para de crecer y es imprescindible contar con lugares de encuentro para los jugadores. Para ello, el festival juntará una amplia oferta de actividades con el apoyo de creadores de contenido y empresas.</p><p>Durante el evento se podrá disfrutar de competiciones para las diferentes comunidades, ponencias realizadas por parte de distintos profesionales y actividades en las cuáles el asistente tendrá una experiencia más cercana al sector de los videojuegos.</p><p>En las próximas semanas podréis ir descubriendo más información a través de las redes sociales y de la página web de Lugo Gaming Fest. Por supuesto, el festival se adaptará a las restricciones y medidas de seguridad ante la Covid-19 que la Xunta de Galiza haya establecido en ese momento.</p>",
      "fx_publicacion_fx":"2022/01/24"
      },
      {"id":4,
        "titulo":"Amazonas Valorant Tournament tendrá una segunda edición",
        "subtitulo":"La final del evento tendrá lugar en el Pazo de Feiras e Congresos de Lugo el domingo 24 de abril",
        "url_imagen":"./assets/imagenes_noticias/Amazonas_Tournament_2.jpg",
        "categoria" : [this.categoriasService.getCategoriaById(2)],
        "contenido":"<p>Amazonas Valorant Tournament, vuelve con <strong>final presencial en Lugo</strong>. Para los que no conozcáis el evento, se trata de un showmatch benéfico mixto entre creadores/as de contenido de la comunidad de Valorant. La primera edición tuvo lugar el año pasado de manera online, donde se recaudó más de 500€ que se repartieron entre la AECC y la Asociación Alma. Con este evento se quería destacar el papel fundamental que tiene la mujer en este sector.<strong> Contamos con 8 capitanas que formaron sus equipos en un draft entre más de 30 jugadores/as</strong>.</p><br><p>Los equipos serán seleccionados mediante un draft el viernes 25 de marzo. En esta ocasión tendremos una fase online los días <strong>26 y 27 de marzo</strong>. Los dos mejores equipos lucharan por ganar esta segunda edición el día 24 abril en Lugo. De nuevo, todo lo recaudado durante el evento irá <strong>destinado a varias asociaciones</strong> que conoceremos las próximas semanas.</p><br><img src='./assets/imagenes_noticias/Amazonas1.jpg' alt='Calendario de la fase online y final' class='imagen-noticia' style='max-width:100%;'><br><br><p>Contaremos con unas capitanas de categoría reconocidas en la escena de Valorant: <strong>AryaWild, Galadinelle, Helensitta, LizzB, Maylenchan, Mixxy Eve, Patalea y Paula Quintela</strong>. Sin duda alguna van a salir unos equipos espectaculares.</p><br><img src='./assets/imagenes_noticias/Amazonas2.jpg' alt='Capitanas participantes del torneo' style='max-width: 100%;'><br><br><p>¡Estad atentos a nuestras redes sociales para conocer los participantes y no perderos ningún detalle!</p>",
        "fx_publicacion_fx":"2022/02/26"
        }
    ].sort((a : Noticia ,b : Noticia) =>  {
      return new Date(b.fx_publicacion_fx).getTime() -  new Date(a.fx_publicacion_fx).getTime()
    })
  }
  getNoticiaById(id : number) : Noticia {

     return this.ensure(this.getNoticias().find(noticia => noticia.id == id));
  }

  getNoticiasHome() : Noticia[] {
    return this.getNoticias()
  }

  getNoticiasByCategoria(idCategoria : number) : Noticia[] {
   let categoriaObtenida : Categoria = this.categoriasService.getCategoriaById(idCategoria)
   let noticiasFiltradas : Noticia[] = []
   if(idCategoria != 1) {
    this.getNoticias().forEach(noticia => {
      noticia.categoria.forEach(categoria => {
        if(categoria.id == categoriaObtenida.id) {
          noticiasFiltradas.push(noticia)
        }
      })
    })
  } else {
    noticiasFiltradas = this.getNoticias()
  }
    return noticiasFiltradas
  }

  ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }

    return argument;
  }
}
