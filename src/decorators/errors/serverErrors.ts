import { Response } from "express";

export function serverErrors(res: Response) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
      }
    };
  };
}
