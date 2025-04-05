import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
  constructor(private readonly castService: CatsService) {}

  @ApiOperation({
    summary: '고양이 정보 조회',
    description: '고양이 정보 조회 API',
  })
  @Get()
  async getCurrentCat() {
    return await this.castService.getCurrentCat();
  }

  @ApiOperation({
    summary: '고양이 회원가입',
    description: '고양이 회원가입 API',
  })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.castService.signUp(body);
  }

  @Post('login')
  login() {
    return 'login';
  }

  @Post('logout')
  logout() {
    return 'logout';
  }

  @Post('uploads/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
