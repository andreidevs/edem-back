import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '.prisma/client';
import { GroupTypes } from './group.types';
export declare class GroupsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.GroupsUncheckedCreateInput): Promise<import(".prisma/client").Groups & {
        hall: import(".prisma/client").Hall;
        students: import(".prisma/client").Students[];
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
    }>;
    getAll(): Promise<(import(".prisma/client").Groups & {
        hall: import(".prisma/client").Hall;
        students: import(".prisma/client").Students[];
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
    })[]>;
    getById(id: number): Promise<import(".prisma/client").Groups & {
        hall: import(".prisma/client").Hall;
        students: import(".prisma/client").Students[];
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
    }>;
    getByType(type: GroupTypes): Promise<(import(".prisma/client").Groups & {
        hall: import(".prisma/client").Hall;
        students: import(".prisma/client").Students[];
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
    })[]>;
    getByTypeFromUser(type: GroupTypes, userId: number): Promise<(import(".prisma/client").Groups & {
        hall: import(".prisma/client").Hall;
        students: import(".prisma/client").Students[];
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
    })[]>;
    update(data: Prisma.GroupsUpdateInput, id: number): Promise<import(".prisma/client").Groups & {
        hall: import(".prisma/client").Hall;
        students: import(".prisma/client").Students[];
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
    }>;
    delete(id: number): Promise<import(".prisma/client").Groups>;
}
