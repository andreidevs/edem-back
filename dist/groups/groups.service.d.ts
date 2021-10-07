import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '.prisma/client';
import { GroupTypes } from './group.types';
export declare class GroupsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.GroupsUncheckedCreateInput): Promise<import(".prisma/client").Groups & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
        hall: import(".prisma/client").Hall;
    }>;
    getAll(): Promise<(import(".prisma/client").Groups & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
        hall: import(".prisma/client").Hall;
    })[]>;
    getById(id: number): Promise<import(".prisma/client").Groups & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
        hall: import(".prisma/client").Hall;
    }>;
    getByType(type: GroupTypes): Promise<(import(".prisma/client").Groups & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
        hall: import(".prisma/client").Hall;
    })[]>;
    getByTypeFromUser(type: GroupTypes, userId: number): Promise<(import(".prisma/client").Groups & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
        hall: import(".prisma/client").Hall;
    })[]>;
    update(data: Prisma.GroupsUpdateInput, id: number): Promise<import(".prisma/client").Groups & {
        user: {
            name: string;
            id: number;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
        hall: import(".prisma/client").Hall;
    }>;
    delete(id: number): Promise<import(".prisma/client").Groups>;
}
