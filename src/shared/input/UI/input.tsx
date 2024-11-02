import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useRef } from 'react';

import Image from 'next/image';

import Text from '~shared/text';
import cn from '~shared/utils/cn';

import CrossIcon from '/public/icons/cross.svg';

const cx = cn('input');
export type InputProps = {
  label?: string;
  error?: string | boolean;
  hasClear?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  const { label, error, hasClear = true, onChange, ...inputProps } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onClear = (e) => {
    e.preventDefault();
    onChange?.({
      target: {
        value: '',
      },
    } as ChangeEvent<HTMLInputElement>);
  };
  const handleFocusInput = () => {
    inputRef.current?.focus();
  };
  const isClearVisible = (inputProps.value as string)?.length > 0;

  return (
    <div className={cx('container')}>
      <Text tag="p" className={cx('label')}>
        {label}
      </Text>
      <div className={cx('undercover')} onClick={handleFocusInput}>
        <input
          ref={inputRef}
          {...inputProps}
          value={inputProps.value}
          onChange={onChange}
          className={cx()}
        />
        {hasClear && isClearVisible && (
          <Image
            src={CrossIcon.src}
            alt="clear"
            onClick={onClear}
            width={30}
            height={30}
            className={cx('clear')}
          />
        )}
      </div>
      <Text tag="p" size="md" className={cx('error')}>
        {error}
      </Text>
    </div>
  );
};

export default Input;
