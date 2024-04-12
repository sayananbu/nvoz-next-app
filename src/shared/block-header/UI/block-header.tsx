'use client';
import React, { FC } from 'react';

import { cn } from '@gravity-ui/page-constructor';
import { Flex, Text } from '@gravity-ui/uikit';

interface BlockHeaderProps {
  children: string;
  subtitle?: string;
}

const DEFAULT_SUBTITLE = 'Новое Время';

const BlockHeader: FC<BlockHeaderProps> = (props) => {
  const { subtitle = DEFAULT_SUBTITLE, children } = props;
  const cx = cn('block-header');

  return (
    <Flex direction="column" gap="1" className={cx()}>
      <Text variant="body-3" color="brand" className={cx('subtitle')}>
        {subtitle}
      </Text>
      <Text variant="display-2">{children}</Text>
    </Flex>
  );
};

export default BlockHeader;
