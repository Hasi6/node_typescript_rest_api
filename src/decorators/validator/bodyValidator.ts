import "reflect-metadata";
import { MetaDataKeys } from "../MetaDataKeys/MetaDataKeys";

export function bodyValidator(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetaDataKeys.Validator, keys, target, key);
  };
}
