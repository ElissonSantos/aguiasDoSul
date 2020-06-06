import * as mongoose from 'mongoose';

export const RequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  dt: { type: Date, required: true },
  unit: { type: String, required: true },
  cargo: { type: String, required: true },
  verificado: { type: Boolean, required: true },
});

export interface Request extends mongoose.Document {
  id: string;
  name: string;
  username: string;
  password: string;
  dt: Date;
  unit: string;
  cargo: string;
  verificado: boolean;
}
