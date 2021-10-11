import { StudentsService } from './students.service';
import { Prisma } from '.prisma/client';
import { AuthService } from 'src/auth/auth.service';
export declare class StudentsController {
    private readonly studentsService;
    private readonly authService;
    constructor(studentsService: StudentsService, authService: AuthService);
    create(dto: Prisma.StudentsUncheckedCreateInput): Promise<import(".prisma/client").Students & {
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
    }>;
    getAll(single: boolean, user: Prisma.UserUncheckedCreateInput): Promise<(import(".prisma/client").Students & {
        group: import(".prisma/client").Groups;
        indiv: import(".prisma/client").Indiv;
        user: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
        };
    })[]>;
    getFromUser(id: number, single: boolean, user: Prisma.UserUncheckedCreateInput): Promise<(import(".prisma/client").Students & {
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
    update(id: number, updateStudentDto: Prisma.StudentsUncheckedUpdateInput): Promise<import(".prisma/client").Students & {
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
