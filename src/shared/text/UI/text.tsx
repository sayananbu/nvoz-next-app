import React, { ElementType, FC, ReactNode } from 'react';

import cn from '~shared/utils/cn';

import { TextSizes, TextTags } from '../model/types';

export type TextProps = {
  tag?: TextTags;
  size?: TextSizes;
  children: ReactNode;
  className?: string;
  weight?: 'bold' | 'semibold' | 'medium' | 'regular';
};
const cx = cn('text');

const Text: FC<TextProps> = (props) => {
  const {
    tag: Tag = 'span' as ElementType,
    size = 'xl',
    className = '',
    weight = 'regular',
    children,
  } = props;
  return <Tag className={cx({ size, weight }, className)}>{children}</Tag>;
};

export default Text;
