import { User } from './../../decorators/user.decorator';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { AuthService } from '../auth.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (!requiredRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();
      const cookie = req.cookies[process.env.JWT_COOKIE_NAME];

      const user = this.jwtService.verify(cookie);
      if (!user) {
        throw new UnauthorizedException({
          message: 'Пользователь не авторизован',
        });
      }

      return user.role.some((role: string) => requiredRoles.includes(role));
    } catch (e) {
      console.log(e);

      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
