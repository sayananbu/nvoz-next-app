import React, { ElementType, FC, ReactNode } from 'react';
import { TextSizes, TextTags } from '../model/types';
import cn from '~shared/utils/cn';

interface TextProps {
  tag?: TextTags;
  size?: TextSizes;
  children: ReactNode;
  className?: string;
}
const cx = cn('text');

const Text: FC<TextProps> = (props) => {
  const { tag: Tag = 'span' as ElementType, size = 'xl', className = '', children } = props;
  return <Tag className={cx({ size }, className)}>{children}</Tag>;
};

export default Text;
