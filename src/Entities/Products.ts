import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Products')
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  sale: number;

  @Column()
  price: number;

  @Column('text')
  stock: string;

  @Column()
  family: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
