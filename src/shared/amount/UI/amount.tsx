import React, { FC } from 'react';

import Text, { TextProps } from '~shared/text';

interface AmountProps {
  value: number;
  addon?: string;
  className?: string;
}

const Amount: FC<AmountProps & Omit<TextProps, 'children'>> = (props) => {
  const { value, className, addon, ...rest } = props;

  const formattedValue = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
  }).format(value);
  const valueAddon = addon ? `\u00A0${addon}` : '';

  return (
    <Text className={className} {...rest}>
      {formattedValue}
      {valueAddon}
    </Text>
  );
};

export default Amount;
