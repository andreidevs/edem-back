import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '.prisma/client';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    create(dto: Prisma.UserCreateInput): Promise<import(".prisma/client").User>;
    findById(id: number): Promise<import(".prisma/client").User>;
    findByEmail(email: string): Promise<import(".prisma/client").User>;
}
