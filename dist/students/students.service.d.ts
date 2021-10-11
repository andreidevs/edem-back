import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.StudentsUncheckedCreateInput): Promise<import(".prisma/client").Students & {
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
    }>;
    getAll(single: boolean): Promise<(import(".prisma/client").Students & {
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
    })[]>;
    getAllFromUser(userId: number, single: boolean): Promise<(import(".prisma/client").Students & {
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
    })[]>;
    getById(id: number): Promise<import(".prisma/client").Students & {
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
    }>;
    update(id: number, data: Prisma.StudentsUncheckedUpdateInput): Promise<import(".prisma/client").Students & {
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
    }>;
    remove(id: number): Promise<import(".prisma/client").Students>;
    paid(id: number): Promise<void>;
    checkAndSetAutoPaid(): Promise<void>;
}
