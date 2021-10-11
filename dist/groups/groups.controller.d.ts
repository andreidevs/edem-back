import { AuthService } from './../auth/auth.service';
import { GroupsService } from './groups.service';
import { BadRequestException } from '@nestjs/common';
import { Prisma } from '.prisma/client';
import { GroupTypes } from './group.types';
export declare class GroupsController {
    private readonly groupService;
    private readonly authService;
    constructor(groupService: GroupsService, authService: AuthService);
    getAllGroups(): Promise<(import(".prisma/client").Groups & {
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
    getByType(type: GroupTypes, user: Prisma.UserUncheckedCreateInput): Promise<(import(".prisma/client").Groups & {
        hall: import(".prisma/client").Hall;
        students: import(".prisma/client").Students[];
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
        typeWorkout: import(".prisma/client").TypeWorkout;
    })[] | BadRequestException>;
    create(dto: Prisma.GroupsUncheckedCreateInput, user: Prisma.UserUncheckedCreateInput): Promise<import(".prisma/client").Groups & {
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
    updateGroup(id: number, dto: Prisma.GroupsUpdateInput): Promise<import(".prisma/client").Groups & {
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
    deleteGroup(id: number): Promise<import(".prisma/client").Groups>;
}
