import { ConfigService } from '@nestjs/config';
import { TypegooseModule, TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
    return {
        uri: configService.get('MONGO_URI').toString(),
        ...getMongoOptions()
    }
};

const getMongoString = (configService: ConfigService) =>
    // 'mongodb://' +
    // configService.get('MONGO_LOGIN')
    // + ':' +
    // configService.get('MONGO_PASSWORD') +
    // '@' +
    // configService.get('MONGO_HOST') +
    // ':' +
    // configService.get('MONGO_PORT') +
    // '/' +
    // configService.get('MONGO_AUTHDATABASE')

    configService.get('MONGO_URI')



const getMongoOptions = () => ({
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

