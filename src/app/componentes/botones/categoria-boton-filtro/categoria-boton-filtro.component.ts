import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'categoria-boton-filtro',
  templateUrl: './categoria-boton-filtro.component.html',
  styleUrls: ['./categoria-boton-filtro.component.css']
})
export class CategoriaBotonFiltroComponent implements OnInit {

  @Input()  texto: string | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

}
