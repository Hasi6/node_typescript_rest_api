import "reflect-metadata";

export function Get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

export function Post(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

export function Put(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

export function Delete(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

export function Patch(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", path, target, key);
  };
}
