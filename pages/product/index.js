import { createRouter } from "next-connect";
import db from "../../utils/database";
import Product from "../../models/Products";

const router = createRouter();

router.get(async (req, res) => {
  await db.connectToDatabase();
  const products = await Product.find({});
  console.log(products);
  await db.closeDatabaseConnection(products);
  res.send(products);
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
