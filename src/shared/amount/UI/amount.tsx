import React, { FC } from 'react';

import { Text, TextProps } from '@gravity-ui/uikit';

interface AmountProps {
  value: number;
  addon?: string;
  className?: string;
}

const Amount: FC<AmountProps & TextProps> = (props) => {
  const { value, className, addon, ...rest } = props;

  const formattedValue = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
  }).format(value);
  const valueAddon = addon ? `\u00A0${addon}` : '';

  return (
    <Text variant="header-1" className={className} {...rest}>
      {formattedValue}
      {valueAddon}
    </Text>
  );
};

export default Amount;
