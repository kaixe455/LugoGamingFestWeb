import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias : Noticia[] = []

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.noticias = this.noticiasService.getNoticias()
  }

}
