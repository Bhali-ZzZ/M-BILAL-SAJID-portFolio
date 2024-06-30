import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'

const regSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});


const regModel = mongoose.models.reg || mongoose.model('reg', regSchema);

export default regModel;