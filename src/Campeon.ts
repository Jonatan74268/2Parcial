export default class Campeon {
  public id: string;

  public nombre: string;

  public alias: string;

  public rol: string;

  public dificultad: string;
  
  public historia: string;

  public imagen: string;

  public constructor(id: string, nombre: string, alias: string, rol: string, dificultad: string, historia: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.alias = alias;
    this.rol = rol;
    this.dificultad = dificultad;
    this.historia = historia;
    this.imagen = imagen;

  }
}
