import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [
    SubscribersModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        SUBSCRIBERS_SERVICE_HOST: Joi.string(),
        SUBSCRIBERS_SERVICE_PORT: Joi.string(),
        PORT: Joi.number()
      })
    })
  ]
})
export class AppModule {}
