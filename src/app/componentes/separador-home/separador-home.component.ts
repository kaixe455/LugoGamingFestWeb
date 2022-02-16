import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separador-home',
  templateUrl: './separador-home.component.html',
  styleUrls: ['./separador-home.component.css']
})
export class SeparadorHomeComponent implements OnInit {

  @Input()  texto: string | undefined ;
  @Input()  primera: boolean | undefined ;

  constructor() {
   }

  ngOnInit(): void {
  }

}
