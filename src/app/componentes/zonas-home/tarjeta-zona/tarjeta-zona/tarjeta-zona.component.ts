import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Alerta from 'sweetalert2';
@Component({
  selector: 'tarjeta-zona',
  templateUrl: './tarjeta-zona.component.html',
  styleUrls: ['./tarjeta-zona.component.css']
})
export class TarjetaZonaComponent implements OnInit {

  @Input()  nombre: string | undefined ;
  @Input()  icono: string | undefined ;
  @Input()  descripcion: string | undefined ;
  @Input()  proximamente: string | undefined ;
  @Input()  id: string | undefined ;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  informacionProximamente() {
    if(this.proximamente == 'true') {
      Alerta.fire('Más información', 'Proximamente!', 'info')
    }else {
      this.router.navigate(['zona', this.id])
    }
  }




}
