import "reflect-metadata";
import { Methods } from "../methods/Methods";
import { MetaDataKeys } from "../MetaDataKeys/MetaDataKeys";

function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.Methods, method, target, key);
    };
  };
}

export const Get = routeBinder(Methods.Get);
export const Post = routeBinder(Methods.Post);
export const Put = routeBinder(Methods.Put);
export const Patch = routeBinder(Methods.Patch);
export const Delete = routeBinder(Methods.Delete);
