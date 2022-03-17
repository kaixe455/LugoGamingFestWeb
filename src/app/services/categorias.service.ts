import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  getAllCategorias() : Categoria[] {

    return [
      {
        id:1,
        nombre:"Todas"
      },
      {
        id:2,
        nombre: "Invitados"
      },
      {
        id:3,
        nombre: "Lugo Gaming Fest"
      }
    ]

  }

  getCategoriaById(id : number) : Categoria {
    return this.getAllCategorias()[id-1]
  }
}
