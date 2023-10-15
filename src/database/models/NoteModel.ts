import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Note extends Model {
  @Column
  id: number;

  @Column
  name: string;

  @Column
  text: string;
}
