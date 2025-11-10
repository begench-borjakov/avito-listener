import { Module } from '@nestjs/common'
import { MessagesGateway } from './ws/messages.gateway'

@Module({
  imports: [],
  controllers: [],
  providers: [MessagesGateway],
})
export class AppModule {}
