import multer from "multer";
import { Request } from "express";

class Multer {
  storage = multer.diskStorage({
    destination: (req: Request, file: any, cb: CallableFunction) => {
      cb(null, "./uploads");
    },
    filename: (req: Request, file: any, cb: CallableFunction) => {
      cb(null, file.originalname);
    }
  });

  upload = multer({ storage: this.storage }).single("image");
}

export default Multer;
