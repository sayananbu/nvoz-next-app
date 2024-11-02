import React, { FC } from 'react';

import Image from 'next/image';

import cn from '~shared/utils/cn';

import { iconsMap } from '../model/icons';
import { AnimationVariant } from '../model/types';

interface BounceAnimationProps {
  variant: AnimationVariant;
  className?: string;
  duration?: number;
  delay?: number;
}
const cx = cn('bounce-animation');

const BounceAnimation: FC<BounceAnimationProps> = (props) => {
  const { variant, duration = 8, delay = 0, className = '' } = props;

  const animationDuration = duration > 0 ? `${duration}s` : '';
  const animationDelay = delay > 0 ? `${delay}s` : '';

  return (
    <Image
      className={cx('', className)}
      src={iconsMap[variant]}
      width={300}
      height={300}
      alt={`${variant}-animation`}
      style={{ animationDuration, animationDelay }}
    />
  );
};

export default BounceAnimation;
