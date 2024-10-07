import React, { FC, useEffect, useState } from 'react';

import ArrowToggle from '~shared/arrow-toggle';
import cn from '~shared/utils/cn';

const cx = cn('slider-controls');

const arrowSize = 40;

interface SliderControlsProps {
  swiper: any;
  className?: string;
}
const SliderControls: FC<SliderControlsProps> = (props) => {
  const { swiper, className } = props;
  const [disabledButton, setDisabledButton] = useState<any>('left');
  const handleGoNext = () => swiper.current?.swiper.slideNext();
  const handleGoPrev = () => swiper.current?.swiper.slidePrev();
  const handleDisableControl = (instance) => {
    if (instance.isBeginning) {
      setDisabledButton('left');
    } else if (instance.isEnd) {
      setDisabledButton('right');
    } else if (!instance.isBeginning && !instance.isEnd) {
      setDisabledButton(null);
    }
  };
  useEffect(() => {
    swiper.current?.swiper.on('slideChange', handleDisableControl);
  }, [swiper]);

  return (
    <div className={cx('', className)}>
      <div
        className={cx('control', { disabled: disabledButton === 'left' })}
        onClick={handleGoPrev}
      >
        <ArrowToggle direction="left" size={arrowSize} />
      </div>
      <div
        className={cx('control', { disabled: disabledButton === 'right' })}
        onClick={handleGoNext}
      >
        <ArrowToggle direction="right" size={arrowSize} />
      </div>
    </div>
  );
};

export default SliderControls;
