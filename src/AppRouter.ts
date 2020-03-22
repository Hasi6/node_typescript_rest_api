import { Router } from "express";

export class AppRouter {
  private static instatnce: Router;

  static getInstance(): Router {
    if (!AppRouter.instatnce) {
      AppRouter.instatnce = Router();
    }

    return AppRouter.instatnce;
  }
}
