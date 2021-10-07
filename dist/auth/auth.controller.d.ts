import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { Prisma } from '.prisma/client';
export declare class AuthController {
    private readonly authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    register({ name, email, password }: Prisma.UserCreateInput): Promise<import(".prisma/client").User>;
    login({ email, password }: Prisma.UserCreateInput, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<{
        id: number;
        email: string;
        name: string;
        role: import(".prisma/client").Role;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
