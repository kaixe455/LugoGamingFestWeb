import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { GuiasService } from 'src/app/services/guias.service';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css']
})
export class TurismoComponent implements OnInit {

  guias : Noticia[] = []

  constructor(private guiaService : GuiasService) { }

  ngOnInit(): void {

    this.guias = this.guiaService.getGuias()
  }

}
