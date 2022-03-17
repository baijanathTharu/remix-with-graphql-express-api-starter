import { Request, Response } from "express";

export interface ResolverContext {
  request: Request;
  res: Response;
  userId: number;
}
