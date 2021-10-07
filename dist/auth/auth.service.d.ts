import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '.prisma/client';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: Prisma.UserCreateInput): Promise<import(".prisma/client").User>;
    findById(id: number): Promise<import(".prisma/client").User>;
    findByEmail(email: string): Promise<import(".prisma/client").User>;
    checkRole(role: string, user: Prisma.UserUncheckedCreateInput): Boolean;
}
