import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'
import type { IncomingMessage } from './messages.types'

@WebSocketGateway({ cors: { origin: '*' } })
export class MessagesGateway {
  @WebSocketServer() server!: Server

  broadcastNewMessage(msg: IncomingMessage) {
    this.server.emit('message:new', msg)
  }
}
