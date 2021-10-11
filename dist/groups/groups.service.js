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
exports.GroupsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./../prisma/prisma.service");
const include = {
    hall: true,
    students: true,
    user: {
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        },
    },
    typeWorkout: true,
};
let GroupsService = class GroupsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.groups.create({
            data,
            include,
        });
    }
    async getAll() {
        return this.prisma.groups.findMany({
            include,
        });
    }
    async getById(id) {
        return this.prisma.groups.findUnique({
            where: { id },
            include,
        });
    }
    async getByType(type) {
        return this.prisma.groups.findMany({
            where: { type },
            include,
        });
    }
    async getByTypeFromUser(type, userId) {
        return this.prisma.groups.findMany({
            where: { type, userId },
            include,
        });
    }
    async update(data, id) {
        return this.prisma.groups.update({
            data,
            where: { id },
            include,
        });
    }
    async delete(id) {
        return this.prisma.groups.delete({
            where: { id }
        });
    }
};
GroupsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GroupsService);
exports.GroupsService = GroupsService;
//# sourceMappingURL=groups.service.js.map