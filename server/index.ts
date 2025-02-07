import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index";
import app from "./app.js";

(async () => {
  await connectDB()
    .then(() => {
      app.listen(process.env.PORT, () => {
        app.on("error", (err) => {
          console.log("ERR: " + err);
          throw err;
        });
        console.log(`App is listening on port ${process.env.PORT}`);
      });
    })
    .catch((err) => {
      console.log("MongoDB Error: " + err);
    });
})();
