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

    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("nueva conexion");
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

const db = { connectToDatabase, closeDatabaseConnection };

export default db;
