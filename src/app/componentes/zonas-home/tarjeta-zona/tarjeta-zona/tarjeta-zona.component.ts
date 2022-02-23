import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tarjeta-zona',
  templateUrl: './tarjeta-zona.component.html',
  styleUrls: ['./tarjeta-zona.component.css']
})
export class TarjetaZonaComponent implements OnInit {

  @Input()  nombre: string | undefined ;
  @Input()  icono: string | undefined ;
  @Input()  descripcion: string | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

}
