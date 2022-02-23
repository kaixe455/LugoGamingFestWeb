import { Component, OnInit } from '@angular/core';
import { Zona } from 'src/app/model/zona';
import { ZonasService } from 'src/app/services/zonas.service';

@Component({
  selector: 'app-zonas-home-componente',
  templateUrl: './zonas-home.component.html',
  styleUrls: ['./zonas-home.component.css']
})
export class ZonasHomeComponent implements OnInit {

  zonas : Zona[] = []

  constructor(private zonasService: ZonasService) { }

  ngOnInit(): void {
    this.zonas = this.zonasService.getZonas();
  }

}
