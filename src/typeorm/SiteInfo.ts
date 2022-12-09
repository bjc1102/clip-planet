import { type } from 'os';
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity({ name: 'sites_info' })
export class SiteInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ogTitle: string;

  @Column()
  ogUrl: string;

  @Column()
  ogDescription: string;

  @Column()
  ogImage: string;

  @ManyToOne((type) => User, (user) => user.photos)
  user: User;
}
