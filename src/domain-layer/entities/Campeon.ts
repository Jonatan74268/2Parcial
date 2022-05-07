//export default class Campeon {
//  public id: string;

//  public nombre: string;

//  public alias: string;

//  public rol: string;

//  public dificultad: string;
  
//  public historia: string;

//  public imagen: string;

//  public constructor(id: string, nombre: string, alias: string, rol: string, dificultad: string, historia: string, imagen: string) {
//    this.id = id;
//    this.nombre = nombre;
//    this.alias = alias;
//    this.rol = rol;
//    this.dificultad = dificultad;
//    this.historia = historia;
//    this.imagen = imagen;
//
//  }
//}


// cambiado ---------------------------------------------------------------------------------------

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Campeon {
  @PrimaryGeneratedColumn({ type: 'varchar', length: 3, nullable: false })
  public id: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  public nombre: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  public alias: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  public roll: string;
  
  @Column({ type: 'varchar', length: 10, nullable: false })
  public dificultad: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  public historia: string;
  
  @Column({ type: 'varchar', length: 10000, nullable: false })
  public imagen: string;

  public constructor(id: number, nombre: string, alias: string, roll: string, dificultad: string, historia: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.alias = alias;
    this.roll = roll;
    this.dificultad = dificultad;
    this.historia = historia;
    this.imagen = imagen;
  }
}