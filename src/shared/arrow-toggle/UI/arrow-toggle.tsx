import React, { FC } from 'react';

import Image from 'next/image';

import cn from '~shared/utils/cn';

import ArrowSVG from 'public/icons/arrow-angle-down.svg';

interface ArrowToggleProps {
  direction?: string;
  size?: number;
}
const cx = cn('arrow-toggle');

const ArrowToggle: FC<ArrowToggleProps> = (props) => {
  const { direction = 'down', size = 40 } = props;
  return (
    <Image
      src={ArrowSVG.src}
      alt="arrow"
      width={size}
      height={size}
      className={cx({ direction })}
    />
  );
};

export default ArrowToggle;
