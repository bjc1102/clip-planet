import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  Name: string;

  @Column({ nullable: true })
  refresh_token: string;
}
