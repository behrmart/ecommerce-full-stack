// Avaya SDP customer log Backend
// by Bernardo F. Martinez Meave
// Mongo DB connection function

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

function convertDocToObj(doc) {
  doc._id = doc._id.toString(); // convierte el valor de la propiedad "_id" a una cadena o string
  doc.createdAt = doc.createdAt.toString(); // convierte el valor de la propiedad "createdAt" a una cadena o string
  doc.updatedAt = doc.updatedAt.toString(); // convierte el valor de la propiedad "updatedAt" a una cadena o string
  return doc; // devuelve el objeto modificado
}

const db = { connect, disconnect, convertDocToObj };

module.exports = connectDB;
