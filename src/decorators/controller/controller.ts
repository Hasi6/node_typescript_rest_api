import "reflect-metadata";
import { Router } from "express";

export const router = Router();

export function Controller(routePrefix: string) {
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
        router.post(`${routePrefix}${path}`, routeHandler);
        router.put(`${routePrefix}${path}`, routeHandler);
        router.delete(`${routePrefix}${path}`, routeHandler);
        router.patch(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
