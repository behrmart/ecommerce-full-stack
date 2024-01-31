import { createRouter } from "next-connect";
import db from "../../utils/database";
import { data } from "../../utils/data";
import Product from "../../models/Products";

const router = createRouter();

router.get(async (req, res) => {
  // Mongoose Functions
  await db.connectToDatabase();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.closeDatabaseConnection();
  res.send("IT WORKS");
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page in not found");
  },
});
