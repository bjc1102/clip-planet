import { Injectable } from '@nestjs/common';
import { UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/User';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async validateUser(details: UserDetails) {
    //실제 유저를 찾아옴
    const user = await this.userRepository.findOneBy({ email: details.email });
    if (user) return user;
    console.log('User Not found... creating');
    const newUser = this.userRepository.create({
      email: details.email,
      Name: details.Name,
    });
    return await this.userRepository.save(newUser);
  }
}
