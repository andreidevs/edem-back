import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '.prisma/client';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        name: string;
        id: number;
        email: string;
        role: import(".prisma/client").Role;
    }[]>;
    getById(id: number): Promise<{
        name: string;
        id: number;
        email: string;
        role: import(".prisma/client").Role;
    }>;
    update(id: number, data: Prisma.UserUpdateInput): Promise<{
        name: string;
        id: number;
        email: string;
        role: import(".prisma/client").Role;
    }>;
    delete(id: number): Promise<import(".prisma/client").User>;
}
