import express from "express";
import { configureServer } from "./config/server_config";
import { errorHandler } from "./middlewares/error_handler";
import connectDB from "./database/connect_database";

const PORT = process.env.PORT as string | 5000;
const env = process.env.NODE_ENV;
const app = express();

const bootStrap = () => {
  configureServer(app);
  app.get("/", (_, res) => {
    res.send("Hello there");
  });
  app.use(errorHandler);

  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        if (env === "development")
          console.log(`--- Server bootstrapped on port ${PORT} ---`);
      });
    })
    .catch((err: Error) => {
      throw new Error(err.message);
    });
  // app.listen(PORT, () => {
  //   if (env === "development")
  //     console.log(`--- Server bootstrapped on port ${PORT} ---`);
  // });
};

export default bootStrap;
