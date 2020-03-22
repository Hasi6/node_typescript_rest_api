import "reflect-metadata";
import { RequestHandler } from "express";
import { MetaDataKeys } from "../MetaDataKeys/MetaDataKeys";

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    let middlewares =
      Reflect.getMetadata(MetaDataKeys.Middleware, target, key) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata(MetaDataKeys.Middleware, middlewares, target, key);
  };
}
