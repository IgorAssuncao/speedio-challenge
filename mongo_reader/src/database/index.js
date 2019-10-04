import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    const host = process.env.NODE_ENV ? 'mongo' : '0.0.0.0';
    this.mongoConnection = mongoose.connect(`mongodb://${host}:27017/speedio`, {
      useUrlNewParser: true,
    });
  }
}

export default new Database();
