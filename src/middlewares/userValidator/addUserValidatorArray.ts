import { ValidationChain, check } from "express-validator";

const addUserValidateArray: ValidationChain[] = [
  check("firstName", "FirstName is Required")
    .not()
    .isEmpty(),
  check("email", "Enter a Valid Email Address").isEmail(),
  check("gender", "Gender is Required, male, female or other")
    .not()
    .isEmpty(),
  check("height", "Height is Required").isNumeric()
];
