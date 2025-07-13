import { configDotenv } from "dotenv";
import { connect, Mongoose } from "mongoose";
configDotenv();

const dbUrl: string = process.env.MONGO_DB_URL as string;

const env = process.env.NODE_ENV;

const connectDB = async (): Promise<Mongoose> => {
  try {
    const conn = await connect(dbUrl);
    if (env === "development")
      console.log(`--- Database connected successfully ---`);
    return conn;
  } catch (e) {
    if (e instanceof Error) {
      if (env === "development")
        console.error(`--- Database connection Error: ${e.message} ---`);
      throw new Error(e.message);
    }
    throw new Error(
      "An unknown error occurred while connecting to the database."
    );
  }
};

export default connectDB;
