'use client';
import React, { FC } from 'react';

import Button, { ButtonProps } from '~shared/button';
import { scrollToForm } from '~shared/utils/scroll-to-form';

const ActionButton: FC<ButtonProps> = (props) => {
  return <Button {...props} onClick={scrollToForm} />;
};

export default ActionButton;
