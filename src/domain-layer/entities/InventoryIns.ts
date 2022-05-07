// cambiado ------------------------------------------------------------------------


import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Campeon from './Campeon';

@Entity()
export default class InventoryIns {
  @PrimaryGeneratedColumn({ type: 'varchar', length: 3, nullable: false })
  public id: string;

  @OneToOne(() => Campeon)
  @JoinColumn()
  public campeon: Campeon;

  @Column({ type: 'smallint', nullable: false })
  public quantity: number;

  @Column({ type: 'datetime', default: new Date() })
  public date: Date;

  public constructor(id: string, campeon: Campeon, quantity: number, date: Date) {
    this.id = id;
    this.campeon = campeon;
    this.quantity = quantity;
    this.date = date;
  }
}