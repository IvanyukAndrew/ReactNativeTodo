import { body } from "express-validator";

export const loginValidation = [
  body("email", "Неправильний формат пошти").isEmail(),
  body("password", "Пароль повинен бути мінімум 5 символів").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Неправильний формат пошти").isEmail(),
  body("password", "Пароль повинен бути мінімум 5 символів").isLength({
    min: 5,
  }),
  body("firstName", "Ім'я повино бути мінімум 2 символа").isLength({ min: 2 }),
  body("secondName", "Прізвише повино бути мінімум 2 символа").isLength({
    min: 2,
  }),
];

export const todoCreateValidation = [
  body("title", "Введите заголовок todo").isLength({ min: 3 }).isString(),
];
