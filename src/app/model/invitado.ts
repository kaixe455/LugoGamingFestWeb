export class Invitado {
  id: number
  nombre:     string;
  ocupacion: string;
  imagen:   string;
  twitter !: string;
  instagram !: string;
  spotify !: string;

  constructor () {
    this.id = 0
    this.nombre = ''
    this.ocupacion = ''
    this.imagen = ''
    this.twitter = ''
    this.instagram = ''
    this.spotify = ''
  }
}
