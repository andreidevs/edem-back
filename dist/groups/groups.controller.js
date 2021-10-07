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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsController = void 0;
const auth_service_1 = require("./../auth/auth.service");
const jwt_guard_1 = require("./../auth/guards/jwt.guard");
const swagger_1 = require("@nestjs/swagger");
const groups_service_1 = require("./groups.service");
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../decorators/user.decorator");
const client_1 = require(".prisma/client");
const group_types_1 = require("./group.types");
let GroupsController = class GroupsController {
    constructor(groupService, authService) {
        this.groupService = groupService;
        this.authService = authService;
    }
    async getAllGroups() {
        return this.groupService.getAll();
    }
    async getById(id) {
        return this.groupService.getById(id);
    }
    async getByType(type, user) {
        if (Object.values(group_types_1.GroupTypes).includes(type)) {
            if (this.authService.checkRole('ADMIN', user))
                return this.groupService.getByType(type);
            const userid = user.id;
            return this.groupService.getByTypeFromUser(type, userid);
        }
        else {
            return new common_1.BadRequestException('Не верный тип группы');
        }
    }
    async create(dto, user) {
        dto.userId = user.id;
        return this.groupService.create(dto);
    }
    async updateGroup(id, dto) {
        return this.groupService.update(dto, id);
    }
    async deleteGroup(id) {
        return this.groupService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getAllGroups", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/getByType/:type'),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getByType", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "updateGroup", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "deleteGroup", null);
GroupsController = __decorate([
    (0, swagger_1.ApiTags)('Группы'),
    (0, common_1.Controller)('groups'),
    __metadata("design:paramtypes", [groups_service_1.GroupsService,
        auth_service_1.AuthService])
], GroupsController);
exports.GroupsController = GroupsController;
//# sourceMappingURL=groups.controller.js.map