import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pase',
  templateUrl: './pase.component.html',
  styleUrls: ['./pase.component.css']
})
export class PaseComponent implements OnInit {

  @Input()  tipo_pase: string | undefined ;
  @Input()  icono: string | undefined ;
  @Input()  enlace: string | undefined ;


  constructor() { }

  ngOnInit(): void {
  }

}
