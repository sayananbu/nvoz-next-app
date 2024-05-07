import React, { FC } from 'react';

import { Card, Text, ThemeProvider, Tooltip } from '@gravity-ui/uikit';

import cn from '~shared/utils/cn';

const cx = cn('mortgage-bar');

interface MortgageBarProps {
  title: string;
  list: (string | { text: string; hint: string })[];
}

const MortgageBar: FC<MortgageBarProps> = (props) => {
  const { title, list } = props;
  return (
    <ThemeProvider theme="dark">
      <Card className={cx()} view="filled">
        <Text variant="header-2">{title}</Text>
        <ul className={cx('list')}>
          {list.map((item, i) => {
            if (typeof item === 'string') {
              return (
                <Text as="li" key={item + i} variant="body-3">
                  {item}
                </Text>
              );
            } else {
              return (
                <Tooltip key={item.text + i} content={item.hint}>
                  <Text as="li" variant="body-3">
                    {item.text}
                  </Text>
                </Tooltip>
              );
            }
          })}
        </ul>
      </Card>
    </ThemeProvider>
  );
};

export default MortgageBar;
