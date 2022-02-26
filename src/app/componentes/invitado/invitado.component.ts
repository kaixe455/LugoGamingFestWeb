import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.css']
})
export class InvitadoComponent implements OnInit {

  @Input()  nombre: string | undefined ;
  @Input()  foto: string | undefined ;
  @Input()  twitter: string | undefined ;
  @Input()  instagram: string | undefined ;
  @Input()  ocupacion: string | undefined ;
  @Input()  spotify: string | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

}
