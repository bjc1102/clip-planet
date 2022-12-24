import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Site } from './site.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  email: string;

  @Column()
  Name: string;

  @Column()
  imageUrl: string;

  @Column({ nullable: true })
  refresh_token: string;

  @Column()
  api_key: string;

  @OneToMany(() => Site, (site) => site.user)
  Sites: Site[];
}
