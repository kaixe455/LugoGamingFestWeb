import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { HeroVideoSectionComponent } from './secciones/hero-video-section/hero-video-section.component';
import { NoticiasHomeComponent } from './secciones/noticias-home/noticias-home.component';
import { PatrocinadoresComponent } from './secciones/patrocinadores/patrocinadores.component';
import { HomeComponent } from './secciones/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ZonasHomeComponent } from './componentes/zonas-home/zonas-home.component';
import { SeparadorHomeComponent } from './componentes/separador-home/separador-home.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTwitch, faInstagram, faDiscord, faFacebook, faSpotify  } from '@fortawesome/free-brands-svg-icons';
import { TarjetaZonaComponent } from './componentes/zonas-home/tarjeta-zona/tarjeta-zona/tarjeta-zona.component';
import { VerNoticiaComponent } from './secciones/ver-noticia/ver-noticia.component';
import { PasesComponent } from './secciones/pases/pases.component';
import { PaseComponent } from './componentes/pase/pase.component';
import { TorneosComponent } from './secciones/torneos/torneos.component';
import { InvitadoComponent } from './componentes/invitado/invitado.component';
import { InvitadosComponent } from './secciones/invitados/invitados.component';
import { NoticiaCardComponent } from './componentes/noticia-card/noticia-card.component';
import { CalendarioComponent } from './secciones/calendario/calendario.component';
import { ConciertosComponent } from './secciones/conciertos/conciertos.component';
import { PonenciasComponent } from './secciones/ponencias/ponencias.component';
import { TurismoComponent } from './secciones/turismo/turismo.component';
import { VerZonaComponent } from './secciones/ver-zona/ver-zona.component';
import { HeaderSeccionComponent } from './componentes/header-seccion/header-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroVideoSectionComponent,
    NoticiasHomeComponent,
    PatrocinadoresComponent,
    HomeComponent,
    FooterComponent,
    ZonasHomeComponent,
    SeparadorHomeComponent,
    TarjetaZonaComponent,
    VerNoticiaComponent,
    PasesComponent,
    PaseComponent,
    TorneosComponent,
    InvitadoComponent,
    InvitadosComponent,
    NoticiaCardComponent,
    CalendarioComponent,
    ConciertosComponent,
    PonenciasComponent,
    TurismoComponent,
    VerZonaComponent,
    HeaderSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library : FaIconLibrary) {
    library.addIcons(faDiscord,faInstagram,faTwitch,faTwitter, faFacebook, faSpotify)
    library.addIconPacks(fas)
  }

 }
