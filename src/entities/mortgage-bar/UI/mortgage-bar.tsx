import React, { FC } from 'react';

import Text from '~shared/text';
import cn from '~shared/utils/cn';
const cx = cn('mortgage-bar');

interface MortgageBarProps {
  title: string;
  list: string[];
}

const MortgageBar: FC<MortgageBarProps> = (props) => {
  const { title, list } = props;
  return (
    <div className={cx()}>
      <Text>{title}</Text>
      <ul className={cx('list')}>
        {list.map((item, i) => {
          return <Text key={item + i}>{item}</Text>;
        })}
      </ul>
    </div>
  );
};

export default MortgageBar;
