import { z } from 'zod';

export const validationSchema = z.object({
  name: z
    .string()
    .regex(/^[\p{Script=Cyrl}\s]*$/u, {
      message: 'Имя может состоять только из букв кириллицы и пробела',
    })
    .min(1, { message: 'Введите имя' })
    .min(2, { message: 'Имя не должно быть короче 2-х символов' }),
  telephone: z.string(),
  description: z.string(),
});
