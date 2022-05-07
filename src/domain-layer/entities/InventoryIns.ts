// cambiado ------------------------------------------------------------------------


import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Campeon from './Campeon';

@Entity()
export default class InventoryIns {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, zerofill: true })
  public id: number;

  @OneToOne(() => Campeon)
  @JoinColumn()
  public campeon: Campeon;

  @Column({ type: 'smallint', nullable: false })
  public quantity: number;

  @Column({ type: 'datetime', default: new Date() })
  public date: Date;

  public constructor(id: number, campeon: Campeon, quantity: number, date: Date) {
    this.id = id;
    this.campeon = campeon;
    this.quantity = quantity;
    this.date = date;
  }
}