"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const include = {
    user: {
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        },
    },
    group: true,
    indiv: true,
};
let StudentsService = class StudentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.students.create({
            data,
            include,
        });
    }
    async getAll(single) {
        return this.prisma.students.findMany({
            where: { single },
            include,
        });
    }
    async getAllFromUser(userId, single) {
        return this.prisma.students.findMany({
            where: { userId, single },
            include,
        });
    }
    async getById(id) {
        return this.prisma.students.findUnique({
            where: { id },
            include,
        });
    }
    async update(id, data) {
        return this.prisma.students.update({
            where: { id },
            data,
            include,
        });
    }
    async remove(id) {
        return this.prisma.students.delete({
            where: { id },
        });
    }
    async paid(id) { }
    async checkAndSetAutoPaid() { }
};
StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map