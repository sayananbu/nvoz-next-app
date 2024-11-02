import { z } from 'zod';

export const validationSchema = z
  .object({
    name: z
      .string({ message: 'Введите имя' })
      .regex(/^[\p{Script=Cyrl}\s]*$/u, {
        message: 'Имя может содержать только буквы кириллицы и пробел',
      })
      .min(2, { message: 'Имя не должно быть короче 2-х символов' })
      .max(64, { message: 'Имя не должно превышать 64 символа' }),
    telephone: z
      .string({ message: 'Введите номер телефона' })
      .min(18, { message: 'Номер телефона должен состоять из 11 цифр' }),
    description: z
      .string()
      .max(200, { message: 'Описание не должно превышать 200 символов' })
      .transform((val) => val.replaceAll('\n', ''))
      .default(''),
  })
  .required({
    name: true,
    telephone: true,
  });
