import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { User } from './User.entity';

@Entity({ name: 'site' })
export class Site {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ogTitle: string;

  @Column()
  ogUrl: string;

  @Column()
  ogImage: string;

  @ManyToOne(() => User, (user) => user.Sites)
  user: User;
}
