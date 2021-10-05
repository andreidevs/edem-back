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
exports.AuthDto = exports.UserRoles = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var UserRoles;
(function (UserRoles) {
    UserRoles[UserRoles["ADMIN"] = 0] = "ADMIN";
    UserRoles[UserRoles["COACH"] = 1] = "COACH";
})(UserRoles = exports.UserRoles || (exports.UserRoles = {}));
class AuthDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'asd@test.ru', description: 'Email' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password', description: 'Password' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Name', description: 'Name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '237fyo23iffiweifj',
        description: 'Присовить роль из модели roles',
    }),
    (0, class_validator_1.IsEnum)(UserRoles),
    __metadata("design:type", Number)
], AuthDto.prototype, "role", void 0);
exports.AuthDto = AuthDto;
//# sourceMappingURL=auth.dto.js.map