import * as mongoose from 'mongoose';

export const DesbravadorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  dt: { type: String, required: true },
  unit: { type: String, required: true },
  cargo: { type: String, required: true },
  verificado: { type: Boolean, required: true },
});

export interface Desbravador extends mongoose.Document {
  id: string;
  name: string;
  username: string;
  password: string;
  dt: string;
  unit: string;
  cargo: string;
  verificado: boolean;
}
