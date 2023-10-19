import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway {
	@WebSocketServer()
	server: Server

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
		console.log(payload)
    return 'Hello world!';
  }
}
