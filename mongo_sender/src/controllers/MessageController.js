import { connect } from 'amqplib';

import User from '../schemas/User';

class MessageController {
  async readAndSave(request, response) {
    const queue = 'users';
    const connection = await connect(process.env.CLOUD_AMQP_URL);
    const channel = await connection.createChannel();
    let user;
    channel.assertQueue(queue);
    channel.consume(
      queue,
      msg => {
        User.create(JSON.parse(msg.content.toString()));
      },
      { noAck: true }
    );

    return response.json({
      status: true,
      message: 'Message saved on MongoDB',
      user,
    });
  }
}

export default new MessageController();
