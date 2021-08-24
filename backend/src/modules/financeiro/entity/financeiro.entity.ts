import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Financeiro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo:number;

  @Column()
  data:string;

  @Column()
  valor: string;

  @Column()
  cpf:string;

  @Column()
  cartao:string;
  
  @Column()
  hora:string;
  
  @Column()
  donodaloja:string;
  
  @Column()
  nomeloja:string;
}
