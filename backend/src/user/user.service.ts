import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(UserInput: Partial<User>): Promise<User> {
    try {
      const user = this.userRepository.create(UserInput);
      return await this.userRepository.save(user);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new Error('Database error: ' + error.message);
      }
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(uid: string): Promise<User> {
    return await this.userRepository.findOneBy({ uid });
  }

  async update(uid: string, updateUserInput: UpdateUserInput): Promise<User> {
    await this.userRepository.update(uid, updateUserInput);
    return this.userRepository.findOneBy({ uid });
  }

  async remove(uid: string): Promise<DeleteResult> {
    return await this.userRepository.delete(uid);
  }
}
