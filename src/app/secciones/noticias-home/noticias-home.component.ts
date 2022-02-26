import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias-home',
  templateUrl: './noticias-home.component.html',
  styleUrls: ['./noticias-home.component.css']
})
export class NoticiasHomeComponent implements OnInit {

  noticias : Noticia[] = []
  noticia : Noticia = new Noticia()

  constructor(private noticiasService: NoticiasService, private router : Router) { }

  ngOnInit(): void {

    this.noticias = this.noticiasService.getNoticias()

  }

}
