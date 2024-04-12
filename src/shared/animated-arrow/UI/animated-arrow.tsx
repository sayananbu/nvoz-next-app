'use client';
import React, { FC, useState } from 'react';

import { AnimationDirection } from 'lottie-web';
import Lottie, { LottieProps } from 'react-lottie-player';

import arrowAnim from 'public/assets/arrow.json';

type AnimatedArrowProps = LottieProps & {
  endTimeout?: number;
  startTimeout?: number;
};

const AnimatedArrow: FC<AnimatedArrowProps> = (props) => {
  const { endTimeout = 0, startTimeout = 0, onComplete, ...restProps } = props;
  const [direction, setDirection] = useState<AnimationDirection>(1);
  const toggleAnimComplete = () => {
    setTimeout(
      () => setDirection(direction > 0 ? -1 : 1),
      direction > 0 ? endTimeout : startTimeout,
    );
  };
  return (
    <Lottie
      onComplete={onComplete || toggleAnimComplete}
      animationData={arrowAnim}
      direction={direction}
      {...restProps}
    />
  );
};

export default AnimatedArrow;
