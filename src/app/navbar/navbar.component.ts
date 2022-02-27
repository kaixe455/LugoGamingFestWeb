import { Component, OnInit } from '@angular/core';
import Alerta from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proximamente() {
    Alerta.fire('PROXIMAMENTE!', 'El calendario será publicado proximamente!', 'info')
  }

}
