import React, { ElementType, FC, ReactNode } from 'react';

import cn from '~shared/utils/cn';

import { HeadingSizes, HeadingTags } from '../model/types';

interface HeadingProps {
  tag?: HeadingTags;
  size?: HeadingSizes;
  children: ReactNode;
  className?: string;
}
const cx = cn('heading');

const Heading: FC<HeadingProps> = (props) => {
  const { tag: Tag = 'h1' as ElementType, size = 'xl', className = '', children } = props;
  return <Tag className={cx({ size }, className)}>{children}</Tag>;
};

export default Heading;
