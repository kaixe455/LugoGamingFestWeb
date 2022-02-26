import { Component, OnInit } from '@angular/core';
import { Invitado } from 'src/app/model/invitado';
import { InvitadosService } from 'src/app/services/invitados.service';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.component.html',
  styleUrls: ['./invitados.component.css']
})
export class InvitadosComponent implements OnInit {

  invitados : Invitado[] = []

  constructor( private invitadoService : InvitadosService) { }

  ngOnInit(): void {
    this.invitados = this.invitadoService.getInvitados()
  }

}
