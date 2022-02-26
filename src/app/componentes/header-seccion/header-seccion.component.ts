import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-seccion',
  templateUrl: './header-seccion.component.html',
  styleUrls: ['./header-seccion.component.css']
})
export class HeaderSeccionComponent implements OnInit {

  @Input()  titulo: string | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

}
