import { Request, Response, NextFunction } from "express";

//function to make username available to any page if user is logged in
export function UserDisplayName(req: Request): string {
  if (req.user) {
    let user = req.user as UserDocument;
    return user.username.toString();
  }
  return "";
}

//function to keep users out of unauthorized areas of the site
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
