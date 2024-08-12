import React, { ElementType, FC } from 'react';

import { Text } from '@gravity-ui/uikit';

import cn from '~shared/utils/cn';

interface BlockHeaderProps {
  children: string;
  subtitle?: string;
  className?: string;
  as?: ElementType;
}

const DEFAULT_SUBTITLE = 'Новое Время';
const cx = cn('block-header');

const BlockHeader: FC<BlockHeaderProps> = (props) => {
  const { subtitle = DEFAULT_SUBTITLE, children, className, as: Comp = 'div' } = props;

  return (
    <Comp className={cx('', className)}>
      <Text variant="body-3" color="brand" className={cx('subtitle')}>
        {subtitle}
      </Text>
      <Text variant="display-2">{children}</Text>
    </Comp>
  );
};

export default BlockHeader;
