'use client';
import React, { useMemo, useRef } from 'react';

import { Button, Card, TextArea, TextInput } from '@gravity-ui/uikit';
import { zodResolver } from '@hookform/resolvers/zod';
import IMask, { MaskedPattern } from 'imask';
import { SubmitHandler, useForm } from 'react-hook-form';

import cn from '~shared/utils/cn';

import { validationSchema } from '../model/schema';

const cx = cn('contact-form');
interface FormDataTypes {
  name: string;
  telephone: string;
  description?: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<FormDataTypes>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const phoneMask = useRef<MaskedPattern<string>>(
    IMask.createMask({
      mask: '+{7} (000) 000-00-00',
    }),
  );

  const onSubmit: SubmitHandler<FormDataTypes> = (data) => console.log(data);
  const registeredPhone = useMemo(() => {
    const mask = phoneMask.current;
    const phoneRegister = register('telephone');
    const { onChange: baseOnChange } = phoneRegister;
    const maskedOnChange = async (e) => {
      if (e.target.value) {
        mask.resolve(e.target.value);
        e.target.value = mask.value;
        console.log(mask.value);
      }
      baseOnChange(e);
    };
    phoneRegister.onChange = maskedOnChange;
    return phoneRegister;
  }, [register]);

  return (
    <form className={cx()} onSubmit={handleSubmit(onSubmit)}>
      <Card className={cx('undercover')} view="outlined">
        <TextInput
          size="xl"
          hasClear={true}
          placeholder="Александров Александр"
          type="text"
          value={watch('name')}
          className={cx('input')}
          error={touchedFields.name && errors.name?.message}
          errorMessage={errors.name?.message}
          label="Ваше имя:"
          {...register('name')}
        />
        <TextInput
          size="xl"
          hasClear={true}
          placeholder="+7 (977) 429-07-29"
          type="tel"
          className={cx('input')}
          label="Ваш телефон:"
          error={errors.telephone?.message}
          errorMessage={errors.telephone?.message}
          {...registeredPhone}
        />
        <TextArea
          placeholder="Что Вас интересует..."
          minRows={3}
          maxRows={5}
          hasClear={true}
          size="xl"
          className={cx('input')}
          error={errors.description?.message}
          errorMessage={errors.description?.message}
          {...register('description')}
        />
        <Button size="xl" type="submit" view="outlined-action" className={cx('submit')}>
          Отправить
        </Button>
      </Card>
    </form>
  );
};

export default ContactForm;
