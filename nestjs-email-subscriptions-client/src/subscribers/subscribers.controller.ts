import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import CreateSubscriberDto from './dto/createSubscriber.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('subscribers')
export class SubscribersController {
  constructor(@Inject('SUBSCRIBERS_SERVICE') private subscribersService: ClientProxy) {}

  @Post('new')
  addSubscriber(@Body() subscriber: CreateSubscriberDto) {
    return this.subscribersService.send({ cmd: 'add-subscriber' }, subscriber);
  }

  @Get()
  getAllSubscribers() {
    return this.subscribersService.send({ cmd: 'get-all-subscribers' }, '');
  }
}
