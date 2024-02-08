import mongoose from "mongoose";

const connection = {};

async function connectToDatabase() {
  if (connection.isConnected) {
    console.log("conexion DB exitosa");
    return;
  }
  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Conexión a base de datos existente.");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan);
    connection.isConnected = db.connections[0].readyState;
  }
}

async function closeDatabaseConnection() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("conectado a la base de datos");
    }
  }
}

function convertDocToObj(doc) {
  // Transformador de documenteos , objetos en contexto alamacenar en DB
  doc._id = doc._id.toString(); // conviert valor de _id a String
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc; //debuelve el objeto modificado
}

const db = { connectToDatabase, closeDatabaseConnection, convertDocToObj };

export default db;
