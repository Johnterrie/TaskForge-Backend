import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entitites';

@Injectable()
export class AuthServices {
  constructor(@InjectRepository(User) private user: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.user.create({ email, password });
    return this.user.save(user);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.user.findOneBy({ id: id });
  }

  find(email: string) {
    return this.user.find({
      select: {
        email: true,
      },
    });
  }
}
