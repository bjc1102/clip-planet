import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { User } from './User.entity';

@Entity({ name: 'site' })
export class Site {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ogTitle: string;

  @Column()
  ogDescription: string;

  @Column()
  favicon: string;

  @Column()
  ogUrl: string;

  @Column()
  ogImage: string;

  @Column('boolean', { default: false })
  isFavorite: boolean;

  @ManyToOne(() => User, (user) => user.Sites)
  user: User;
}
