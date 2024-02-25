// barcode.js

import { Schema, model } from 'mongoose';

//const { Schema, model } = mongoose;

const barcodeSchema = new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const Barcode = model('Barcode', barcodeSchema);

export default Barcode;
