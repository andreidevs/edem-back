import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtStratagy_base: new (...args: any[]) => Strategy;
export declare class JwtStratagy extends JwtStratagy_base {
    private readonly configService;
    constructor(configService: ConfigService);
}
export {};
