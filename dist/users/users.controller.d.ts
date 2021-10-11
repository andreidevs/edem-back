import { UsersService } from './users.service';
import { Prisma } from '.prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<{
        id: number;
        name: string;
        email: string;
        role: import(".prisma/client").Role;
    }[]>;
    getById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: import(".prisma/client").Role;
    }>;
    update(id: number, data: Prisma.UserUpdateInput): Promise<{
        id: number;
        name: string;
        email: string;
        role: import(".prisma/client").Role;
    }>;
    delete(id: number): Promise<import(".prisma/client").User>;
}
