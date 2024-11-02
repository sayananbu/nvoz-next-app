import { ChangeEvent, DetailedHTMLProps, FC, TextareaHTMLAttributes, useRef } from 'react';

import Image from 'next/image';
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

import Text from '~shared/text';
import cn from '~shared/utils/cn';

import CrossIcon from '/public/icons/cross.svg';

const cx = cn('textarea');
export type TextAreaProps = {
  label?: string;
  error?: string | boolean;
  hasClear?: boolean;
  maxLength?: number;
} & TextareaAutosizeProps &
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

const TextArea: FC<TextAreaProps> = (props) => {
  const { label, error, hasClear = true, maxLength = 200, onChange, ...inputProps } = props;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const onClear = (e) => {
    e.preventDefault();
    onChange?.({
      target: {
        value: '',
      },
    } as ChangeEvent<HTMLTextAreaElement>);
  };
  const handleFocusInput = () => {
    inputRef.current?.focus();
  };
  const isClearVisible = (inputProps.value as string)?.length > 0;
  const inputLength = (inputProps.value as string).length;
  const isError = Boolean(error) && maxLength < inputLength;

  return (
    <div className={cx('container')}>
      <Text tag="p" className={cx('label')}>
        {label}
      </Text>
      <div className={cx('undercover')} onClick={handleFocusInput}>
        <TextareaAutosize
          ref={(tag) => {
            (inputRef as Writable<typeof inputRef>).current = tag;
          }}
          className={cx()}
          onChange={onChange}
          {...inputProps}
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
      <Text tag="p" size="md" className={cx('hint', { error: isError })}>
        {error}
        {` ${inputLength}/${maxLength}`}
      </Text>
    </div>
  );
};

export default TextArea;
