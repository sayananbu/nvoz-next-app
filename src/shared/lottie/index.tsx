'use client';
import React, { FC } from 'react';

import * as LottieCore from 'react-lottie-player';

const Lottie: FC<LottieCore.LottieProps> = (props) => {
  return <LottieCore.default {...props} />;
};

export default Lottie;
