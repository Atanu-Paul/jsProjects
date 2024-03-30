import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login() {
    return 'this is login function';
  }

  @Post('signup')
  signup() {
    return 'this is sign up function';
  }
}
