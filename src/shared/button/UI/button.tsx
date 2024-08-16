import React, { FC, ReactNode } from 'react';

import Text, { TextSizes, TextWeights } from '~shared/text';
import cn from '~shared/utils/cn';
const cx = cn('button');

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  textSize?: TextSizes;
  textWeight?: TextWeights;
  variant?: 'solid' | 'outlined';
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = 'solid', size = 'lg', onClick, className = '', textWeight } = props;
  return (
    <button className={cx({ variant, size }, className)} onClick={onClick}>
      <Text size={size} weight={textWeight}>
        {children}
      </Text>
    </button>
  );
};

export default Button;
