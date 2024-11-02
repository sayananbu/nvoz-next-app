import React, { ChangeEvent, FC, useMemo, useRef } from 'react';

import IMask, { MaskedPattern } from 'imask';

import Input, { InputProps } from '~shared/input';

type PhoneInputProps = {
  mask?: string;
} & InputProps;

const PhoneInput: FC<PhoneInputProps> = (props) => {
  const { mask = '+{7} (000) 000-00-00', onChange: baseOnChange, ...inputProps } = props;

  const phoneMask = useRef<MaskedPattern<string>>(
    IMask.createMask({
      mask,
    }),
  );

  const maskedOnChange = useMemo(() => {
    const maskPattern = phoneMask.current;
    return async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        maskPattern.resolve(e.target.value);
        e.target.value = maskPattern.value;
      }
      baseOnChange?.(e);
    };
  }, [baseOnChange]);

  return <Input onChange={maskedOnChange} {...inputProps} />;
};

export default PhoneInput;
