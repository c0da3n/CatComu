import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cats.entity';
import { Repository } from 'typeorm';
import { CatRequestDto } from './dto/cats.request.dto';
import * as bycrypt from 'bcryptjs';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  async getCurrentCat() {
    const cats = await this.catRepository.find();
    return instanceToPlain(cats);
  }

  async hashedPassword(password: string) {
    const salt = await bycrypt.genSalt(10);
    return await bycrypt.hash(password, salt);
  }

  async signUp(catRequestDto: CatRequestDto) {
    const { id, email, name, password } = catRequestDto;
    const isCatExist = await this.catRepository.findOne({ where: { email } });
    if (isCatExist) {
      throw new UnauthorizedException('이미 존재하는 고양이입니다.');
    }

    const newUser = this.catRepository.create({
      id,
      email,
      name,
      password: await this.hashedPassword(password),
    });

    return await this.catRepository.save(newUser);
  }
}
