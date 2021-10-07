// import { AuthGuard } from '@nestjs/passport';

// export class JwtAuthGuard extends AuthGuard('jwt') {

// }

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const cookie = req.cookies[process.env.JWT_COOKIE_NAME];

      const user = this.jwtService.verify(cookie);
      if (!user) {
        throw new UnauthorizedException({
          message: 'Пользователь не авторизован',
        });
      }

      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
  }
}
