import { NextFunction, Request, Response } from "express";
import { AppResponse, statusMsg } from "../utils/app-response";

class NotFoundError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.status = 404;
  }
}

const notFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const notFound = new NotFoundError("Not Found");
  next(notFound);
};

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    next(error);
  }

  const statusCode = (error as NotFoundError).status || 500;

  res.status(statusCode).json(new AppResponse(statusMsg.failure, error.message));
};

export { notFoundErrorHandler, errorHandler };
