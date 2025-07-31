import { Document } from "mongoose";

//Defined types and interfaces for user
export interface IUser extends Document {
    firstName: string,
    lastName: string,
    email: string
    password: string,
}
export type IUserInput = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

