import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Cat } from '../entities/cats.entity';

export class CatRequestDto extends PickType(Cat, [
  'id',
  'email',
  'password',
  'name',
] as const) {
  @IsString()
  id: string;

  @ApiProperty({
    example: 'test@gmail.com',
    description: '이메일',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '12345678',
    description: '비밀번호',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: '고양이',
    description: '고양이 이름',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
