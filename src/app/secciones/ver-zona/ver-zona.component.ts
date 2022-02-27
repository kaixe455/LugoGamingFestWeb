import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zona } from 'src/app/model/zona';
import { ZonasService } from 'src/app/services/zonas.service';

@Component({
  selector: 'app-ver-zona',
  templateUrl: './ver-zona.component.html',
  styleUrls: ['./ver-zona.component.css']
})
export class VerZonaComponent implements OnInit {

  zona : Zona = new Zona
  idZona : number

  constructor(private zonaService : ZonasService,private router: Router,private route: ActivatedRoute) {
    this.idZona = this.route.snapshot.params['id'];
    this.zona = this.zonaService.getZonaById(this.idZona);
   }

  ngOnInit(): void {

  }

}
