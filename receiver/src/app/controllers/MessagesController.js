import { connect } from 'amqplib';

class MessagesController {
  async store(request, response) {
    const queue = 'users';
    const connection = await connect(process.env.CLOUD_AMQP_URL);
    const channel = await connection.createChannel();
    channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(request.body)));

    return response.json({ message: 'User data queued successfully' });
  }
}

export default new MessagesController();
