import React, { ElementType, FC } from 'react';

import Text from '~shared/text';
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
  const { subtitle = DEFAULT_SUBTITLE, children, className, as: Component = 'div' } = props;

  return (
    <Component className={cx('', className)}>
      <Text tag="p" size="xl" weight="semibold" className={cx('subtitle')}>
        {subtitle}
      </Text>
      <Text size="4xl" weight="semibold">
        {children}
      </Text>
    </Component>
  );
};

export default BlockHeader;
