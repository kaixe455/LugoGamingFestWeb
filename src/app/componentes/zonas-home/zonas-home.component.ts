import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-zonas-home-componente',
  templateUrl: './zonas-home.component.html',
  styleUrls: ['./zonas-home.component.css']
})
export class ZonasHomeComponent implements OnInit {

  faCoffeeIcon = faCoffee

  constructor() { }

  ngOnInit(): void {
  }

}
