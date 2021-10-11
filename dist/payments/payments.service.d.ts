import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';
export declare class PaymentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.PaymentsUncheckedCreateInput): Promise<import(".prisma/client").Payments & {
        group: import(".prisma/client").Groups;
        coach: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        indiv: import(".prisma/client").Indiv;
        hall: import(".prisma/client").Hall;
    }>;
    findAll(): Promise<(import(".prisma/client").Payments & {
        group: import(".prisma/client").Groups;
        coach: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        indiv: import(".prisma/client").Indiv;
        hall: import(".prisma/client").Hall;
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Payments & {
        group: import(".prisma/client").Groups;
        coach: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        indiv: import(".prisma/client").Indiv;
        hall: import(".prisma/client").Hall;
    }>;
    update(id: number, data: Prisma.PaymentsUncheckedUpdateInput): Promise<import(".prisma/client").Payments & {
        group: import(".prisma/client").Groups;
        coach: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        indiv: import(".prisma/client").Indiv;
        hall: import(".prisma/client").Hall;
    }>;
    remove(id: number): Promise<import(".prisma/client").Payments>;
}
