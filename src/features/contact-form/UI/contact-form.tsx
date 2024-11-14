'use client';
import React, { FC, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Element } from 'react-scroll';

import { sendDataToTelegram } from 'app/actions';
import Button from '~shared/button';
import Input from '~shared/input';
import Map from '~shared/map';
import PhoneInput from '~shared/phone-input';
import Text from '~shared/text';
import TextArea from '~shared/textarea';
import cn from '~shared/utils/cn';

import { validationSchema } from '../model/schema';

import LoaderIcon from 'public/icons/loader.svg';

const cx = cn('contact-form');
interface FormDataTypes {
  name: string;
  telephone: string;
  description?: string;
}
interface ContactFormProps {
  className?: string;
}
const SUCCESS = 'Заявка успешно отправлена! Скоро с вами свяжутся.';
const SENDING = 'Запрос в обработке...';
const ERROR = 'Упс... ошибка, попробуйте позднее.';
const MESSAGE_TIMEOUT = 5000;
const FORM_DEFAULT_VALUES = {
  name: '',
  telephone: '',
  description: '',
};

const ContactForm: FC<ContactFormProps> = (props) => {
  const { className = '' } = props;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm<FormDataTypes>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
    defaultValues: FORM_DEFAULT_VALUES,
  });
  const [status, setStatus] = useState({
    error: false,
    success: false,
    sending: false,
  });

  const onSubmit: SubmitHandler<FormDataTypes> = async (data) => {
    if (!status.sending) {
      setStatus({ ...status, sending: true });
      try {
        const response = await sendDataToTelegram(data);
        if (response.ok) {
          setStatus({ sending: false, success: true, error: false });
          reset();
        } else {
          setStatus({ sending: false, success: false, error: true });
          console.log(response);
        }
      } catch (e) {
        console.log(e);
        setStatus({ sending: false, success: false, error: true });
      }
      setTimeout(
        () => setStatus({ sending: false, success: false, error: false }),
        MESSAGE_TIMEOUT,
      );
    }
  };

  const getErrorMessage = (key: keyof FormDataTypes) => {
    return (touchedFields[key] || isSubmitted) && errors[key]?.message;
  };
  const isMessageVisible = Object.values(status).some(Boolean);

  return (
    <Element id="contact-form">
      <form className={cx('', className)} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('undercover')}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                label="Фамилия Имя"
                placeholder="Александров Александр"
                error={getErrorMessage('name')}
                {...field}
              />
            )}
          />
          <Controller
            name="telephone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                label="Телефон:"
                placeholder="+7 (977) 429-07-29"
                error={getErrorMessage('telephone')}
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextArea
                label="Вас интересует:"
                placeholder="Хотелось бы выгодно купить квартиру в Москве"
                error={getErrorMessage('description')}
                minRows={3}
                maxRows={4}
                {...field}
              />
            )}
          />
          <Button type="submit" className={cx('submit')}>
            Отправить заявку
          </Button>
          <div
            className={cx('status-message', {
              visible: isMessageVisible,
              error: status.error,
              success: status.success,
              loading: status.sending,
            })}
          >
            <Text tag="p" size="lg">
              {status.success && SUCCESS}
              {status.error && ERROR}
              {status.sending && SENDING}
            </Text>
            {status.sending && (
              <Image
                src={LoaderIcon.src}
                className={cx('status-message__loader')}
                alt="loader"
                width={30}
                height={30}
              />
            )}
          </div>
        </div>
        <Map />
      </form>
    </Element>
  );
};

export default ContactForm;
