import { Component, OnInit } from '@angular/core';
import Alerta from 'sweetalert2'

@Component({
  selector: 'app-hero-video-section',
  templateUrl: './hero-video-section.component.html',
  styleUrls: ['./hero-video-section.component.css']
})
export class HeroVideoSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  proximamente() {
    Alerta.fire('PROXIMAMENTE!', 'Aun no se ha abierto la venta de entradas', 'info')
  }

}
