import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { Noticia } from 'src/app/model/noticia';
import { CategoriasService } from 'src/app/services/categorias.service';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias : Noticia[] = []
  categorias: Categoria[] = []

  constructor(private noticiasService: NoticiasService, private categoriasService : CategoriasService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.noticias = this.noticiasService.getNoticias()
    this.categorias = this.categoriasService.getAllCategorias()
    console.table(this.categorias)
  }

  filtrarPorCategoria(id : number) {
    this.noticias = this.noticiasService.getNoticiasByCategoria(id)
    console.log(this.noticias)
  }

}
