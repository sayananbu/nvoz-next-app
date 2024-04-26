'use client';
import { FC } from 'react';

import { Button as ButtonCore, ButtonProps } from '@gravity-ui/uikit';

const Button: FC<ButtonProps> = (props) => {
  return <ButtonCore {...props} />;
};

export default Button;
