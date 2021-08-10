import AdminBro from 'admin-bro';
import { INestApplication } from '@nestjs/common';
import { getModelForClass } from '@typegoose/typegoose';

// import { TopPageModel } from './../top-page/top-page.model';
// import { ProductModel } from './../product/product.model';
// import { ReviewModel } from './../review/review.model';
import { UserModel } from '../user/user.model';


const mongoose = require('mongoose')

const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroExpress = require('admin-bro-expressjs');



const Auth = getModelForClass(UserModel, {
    schemaOptions: { collection: 'User' }
})





export async function setupAdminPanel(app: INestApplication): Promise<void> {
    /** Create adminBro instance */

    AdminBro.registerAdapter(AdminBroMongoose)

    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })


    const adminBro = new AdminBro({
        resources: [Auth],
        rootPath: "/admin",
        branding: {
            companyName: 'Andrei_dev',
        },

    });
    //... other AdminBroOptions


    const router = AdminBroExpress.buildRouter(adminBro);




    /** Create router */


    /** Bind routing */
    app.use(adminBro.options.rootPath, router);

}