// require("dotenv").config();
import dotenv from "dotenv";
// import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

app.listen(process.env.PORT, () => {
  app.on("error", (err) => {
    console.log("ERR: " + err);
    throw err;
  });
  console.log(`App is listening on port ${process.env.PORT}`);
});

// await connectDB()
//     .then(() => {
//         app.listen(process.env.PORT, () => {
//             app.on("error", (err) => {
//                 console.log("ERR: " + err);
//                 throw err;
//             });
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.log("MongoDB Error: " + err);
//     });

// (async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (err) => {
//             console.log("ERR: " + err);
//             throw err;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.log("ERR: " + error);
//         throw error;
//     }
// })();
