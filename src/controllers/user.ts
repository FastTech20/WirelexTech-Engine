import { Request, Response, NextFunction } from "express"
import { IUser, IUserInput } from "../types/user";
import bcrypt from "bcrypt"
import { AppResponse, statusMsg } from "../utils/app-response";
import User from "../models/user";
import { sign } from "jsonwebtoken";

class UserController {

  static async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, firstName, lastName } = req.body as IUserInput;

      //We can have a middleware to validate inputs from client(We can use joi if you are okey with it)
      if (!email || !password || !firstName || !lastName) {
        return res.status(400).json(new AppResponse(statusMsg.failure, "All fields are required"));
      }

      if (password.length < 8) {
        return res.status(400).json(new AppResponse(statusMsg.failure, "Password must be at least 8 characters"));
      }

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json(new AppResponse(statusMsg.failure, "User already exists"));
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      
      const newUser: IUserInput = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      };

      const user = await User.create(newUser as IUser);


      //We can separate this as a util if we want
      const secret = process.env.JWT_SECRET;
      if (!secret || typeof secret !== "string") {
        throw new Error("JWT secret is not defined");
      }
      const token = sign({ id: user._id, email: user.email }, secret, { expiresIn: "1d" });

      return res.status(201).json(
        new AppResponse(statusMsg.success, "User signed up successfully", {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          token
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async signIn(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error)
    }
  }
  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error)
    }
  }
  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error)
    }
  }
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error)
    }
  }

}

export default UserController;
