import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PaymentModel } from './payment.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: PaymentModel,
        schemaOptions: {
          collection: 'Payments',
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsService],
})
export class PaymentsModule {}
