export declare enum UserRoles {
    ADMIN = 0,
    COACH = 1
}
export declare class AuthDto {
    email: string;
    password: string;
    name: string;
    role?: UserRoles;
}
