import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { configDotenv } from "dotenv";
configDotenv();
const allowedOrigins = [""];

export const configureServer = (app: Application) => {
  app.options("*", cors());
  app.use(
    cors({
      origin: allowedOrigins,
      methods: "GET,POST,PUT,DELETE",
      allowedHeaders: "Content-Type,Authorization",
    })
  );
  app.use(compression());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === "development") {
    console.log(`--- Running in development mode ---`);
  } else {
    console.log("--- Running in production mode ---");
  }
};
