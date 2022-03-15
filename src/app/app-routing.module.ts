import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './secciones/actividades/actividades.component';
import { CalendarioComponent } from './secciones/calendario/calendario.component';
import { ConciertosComponent } from './secciones/conciertos/conciertos.component';
import { HomeComponent } from './secciones/home/home.component';
import { NoticiasComponent } from './secciones/noticias/noticias.component';
import { PonenciasComponent } from './secciones/ponencias/ponencias.component';
import { TurismoComponent } from './secciones/turismo/turismo.component';
import { VerNoticiaComponent } from './secciones/ver-noticia/ver-noticia.component';
import { VerZonaComponent } from './secciones/ver-zona/ver-zona.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noticia/:id', component: VerNoticiaComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'conciertos', component: ConciertosComponent },
  { path: 'ponencias', component: PonenciasComponent },
  { path: 'guia-turistica', component: TurismoComponent },
  { path: 'zona/:id', component: VerZonaComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'noticias', component: NoticiasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
