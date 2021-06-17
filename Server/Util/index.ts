import { Express, Request, Response, NextFunction } from "express";
import { DB } from "../Config/db.js";

export function UserDisplayName(req: Request): string {
  if (req.user) {
    let user = req.user as UserDocument;
    return user.username.toString();
  }
  return "";
}

export function AuthGaurd(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}
