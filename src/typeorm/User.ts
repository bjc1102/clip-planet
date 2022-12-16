import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
// import { SiteInfo } from './SiteInfo';

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

  // @OneToMany((type) => SiteInfo, (siteinfo) => siteinfo.user)
  // photos: SiteInfo[];
}
