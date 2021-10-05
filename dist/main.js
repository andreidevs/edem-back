"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const http_filter_1 = require("./filters/http.filter");
const fallback_filter_1 = require("./filters/fallback.filter");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const validation_exception_1 = require("./filters/validation.exception");
const validation_filter_1 = require("./filters/validation.filter");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Top APi')
        .setDescription('The top rating API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    app.useGlobalFilters(new fallback_filter_1.FallbackExceptionFilter(), new http_filter_1.HttpExceptionFilter(), new validation_filter_1.ValidationFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        skipMissingProperties: true,
        exceptionFactory: (errors) => {
            const messages = errors.map(error => `${error.property} имеет неверное значение ${error.value}, ${typeof (error.constraints) === "object" ? Object.values(error.constraints).join(', ') : ""} `);
            return new validation_exception_1.ValidationException(messages);
        }
    }));
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.enableCors();
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map