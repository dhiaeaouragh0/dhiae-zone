// backend/src/config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connecté avec succès ! 🎉');
  } catch (error) {
    console.error('Erreur de connexion MongoDB :', error.message);
    process.exit(1); // arrête le serveur si ça rate
  }
};

export default connectDB;