import React, { FC } from 'react';

import { cn } from '@gravity-ui/page-constructor';
import { Text } from '@gravity-ui/uikit';

const cx = cn('stepper-block');

interface StepperBlockProps {
  title: string;
  description?: string;
}

const StepperBlock: FC<StepperBlockProps> = (props) => {
  const { title, description } = props;

  return (
    <div className={cx()}>
      <div className={cx('text')}>
        <Text as="h6" variant="header-1" className={cx('title')}>
          {title}
        </Text>
        {description && (
          <Text as="p" variant="body-2" className={cx('description')}>
            {description}
          </Text>
        )}
      </div>

      <div className={cx('dot')}></div>
      <div className={cx('line')}></div>
    </div>
  );
};

export default StepperBlock;
