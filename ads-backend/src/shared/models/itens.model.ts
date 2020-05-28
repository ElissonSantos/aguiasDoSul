import * as mongoose from 'mongoose';

export const UnidadeSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export interface Unidade extends mongoose.Document {
  id: string;
  name: string;
}
