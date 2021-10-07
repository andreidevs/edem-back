import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.StudentsUncheckedCreateInput): Promise<import(".prisma/client").Students & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
    }>;
    getAll(single: boolean): Promise<(import(".prisma/client").Students & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
    })[]>;
    getAllFromUser(userId: number, single: boolean): Promise<(import(".prisma/client").Students & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
    })[]>;
    getById(id: number): Promise<import(".prisma/client").Students & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
    }>;
    update(id: number, data: Prisma.StudentsUncheckedUpdateInput): Promise<import(".prisma/client").Students & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
    }>;
    remove(id: number): Promise<import(".prisma/client").Students>;
    paid(id: number): Promise<void>;
    checkAndSetAutoPaid(): Promise<void>;
}
