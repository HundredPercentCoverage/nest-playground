import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getAllAuth() {
    return { message: 'OK' };
  }
}
