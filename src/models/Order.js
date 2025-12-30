// backend/src/models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  variantName: { // optionnel : couleur choisie par le client
    type: String
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  },
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  customerPhone: {
    type: String,
    required: true,
    trim: true
  },
  customerEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  wilaya: {
    type: String,
    required: true,
    uppercase: true
  },
  deliveryType: {
    type: String,
    enum: ['domicile', 'agence'],
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  note: {
    type: String,
    default: '',
    trim: true
  },
  productPrice: { // prix unitaire au moment de la commande (pour éviter changements futurs)
    type: Number,
    required: true
  },
  shippingFee: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;