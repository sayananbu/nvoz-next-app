import React, { FC } from 'react';

import Heading from '~shared/heading';
import Text from '~shared/text';
import cn from '~shared/utils/cn';

const cx = cn('statistic-bar');

interface StatisticBarProps {
  value: string;
  description: string;
}

const StatisticBar: FC<StatisticBarProps> = (props) => {
  const { value, description } = props;
  return (
    <div className={cx()}>
      <Heading className={cx('value')} size="xl">
        {value}
      </Heading>
      <div className={cx('line')}></div>
      <Text className={cx('description')} size="md">
        {description}
      </Text>
    </div>
  );
};

export default StatisticBar;
