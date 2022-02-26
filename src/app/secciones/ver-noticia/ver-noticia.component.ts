import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-ver-noticia',
  templateUrl: './ver-noticia.component.html',
  styleUrls: ['./ver-noticia.component.css']
})
export class VerNoticiaComponent implements OnInit {

  noticia : Noticia = new Noticia()
  idNoticia : number

  constructor(private noticiaService : NoticiasService,private router: Router,private route: ActivatedRoute) {
    this.idNoticia = this.route.snapshot.params['id'];
     this.noticia = this.noticiaService.getNoticiaById(this.idNoticia)
   }



  ngOnInit(): void {
  }

}
