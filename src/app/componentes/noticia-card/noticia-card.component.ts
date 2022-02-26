import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.css']
})
export class NoticiaCardComponent implements OnInit {

  @Input()  noticia!: Noticia ;

  constructor(private router: Router, private noticiasService : NoticiasService) { }

  ngOnInit(): void {
  }

  visualizarNoticia(id : number) {
    this.router.navigate(['noticia', id])
  }

  irNoticia(id : number) {

    this.router.navigate(['noticia', id])
  }

}
