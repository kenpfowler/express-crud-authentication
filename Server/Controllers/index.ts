import { Request, Response, NextFunction } from "express";

//create and export controllers to be used by the index router
export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Home",
    page: "home",
  });
}

export function DisplayAboutPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "About",
    page: "about",
  });
}

export function DisplayServicesPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Services",
    page: "services",
  });
}
export function DisplayProjectsPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Projects",
    page: "projects",
  });
}

export function DisplayContactPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Contact",
    page: "contact",
  });
}

export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Login",
    page: "login",
  });
}

export function DisplayRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Register",
    page: "register",
  });
}
