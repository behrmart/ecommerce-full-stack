// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../utils/database";

export default async function handler(req, res) {
  await db.connectToDatabase();
  await db.closeDatabaseConnection();
  res
    .status(200)
    .json({ name: "Bernardo Mart", description: "learning nextJS" });
}
