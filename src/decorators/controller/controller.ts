import "reflect-metadata";

import { AppRouter } from "../../AppRouter";
import { Methods } from "../methods/Methods";
import { MetaDataKeys } from "../MetaDataKeys/MetaDataKeys";
import { RequestHandler, Request, Response, NextFunction } from "express";

function bodyValidators(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    let errors: any[] = [];

    if (!req.body) {
      res.status(422).json({ errors: [{ msg: "Request Body Not Found" }] });
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        errors = [...errors, { msg: `${key} is Required`, value: key }];
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }
    next();
  };
}

export function Controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetaDataKeys.Path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetaDataKeys.Methods,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetaDataKeys.Middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetaDataKeys.Validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
