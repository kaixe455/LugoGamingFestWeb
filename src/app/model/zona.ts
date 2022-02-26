export class Zona {
  id: number
  nombre:     string;
  descripcion: string;
  icono:   string;
  proximamente: boolean

  constructor () {
    this.id = 0
    this.nombre = ''
    this.descripcion = ''
    this.icono = ''
    this.proximamente = false
  }
}
