import { validationResult, Result, ValidationError } from "express-validator";
import { Request, Response, NextFunction } from "express";

const bodyValidator = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {
    try {
        // Get All request body Errors to a Variable
        const errors: Result<ValidationError> = validationResult(req);

        // Check Body is Okay
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ errors: { msg: "Internal Server Error" } });
    }
};

export default bodyValidator;
