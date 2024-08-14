import React, { FC, ReactNode } from 'react';
import cn from '~shared/utils/cn';
const cx = cn('button');

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'solid' | 'outlined';
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = 'solid', size = 'md', className = '' } = props;
  return <button className={cx({ variant, size }, className)}>{children}</button>;
};

export default Button;
