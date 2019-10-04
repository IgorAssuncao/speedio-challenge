import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
  },
  access_time: {
    type: Date,
    required: true,
  },
  request_method: {
    type: String,
    required: true,
  },
  user_agent: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', UserSchema);
