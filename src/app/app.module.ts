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
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

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
    SeparadorHomeComponent
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
    library.addIconPacks(fas,fab)
  }

 }
