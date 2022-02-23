import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.css']
})
export class NoticiaCardComponent implements OnInit {

  @Input()  noticia!: Noticia ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  visualizarNoticia(id : number) {
    this.router.navigate(['noticia', id])
  }

}
