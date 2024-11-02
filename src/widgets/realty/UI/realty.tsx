'use client';
import React, { FC, useRef } from 'react';

import RealtyCard from '~entities/realty-card';
import BlockHeader from '~shared/block-header';
import SliderControls from '~shared/slider-controls';
import { Swiper, SwiperSlide } from '~shared/swiper';
import cn from '~shared/utils/cn';

import { realtyData } from '../model/realty-data';

interface RealtyProps {
  className?: 'string';
}

const cx = cn('realty');

const Realty: FC<RealtyProps> = (props) => {
  const { className } = props;

  const swiperRef = useRef(null);

  return (
    <>
      <div className={cx('block-header')}>
        <BlockHeader as="header" className={cx('text')}>
          Примеры работ
        </BlockHeader>
        <SliderControls swiper={swiperRef} />
      </div>
      <div className={cx('', className)}>
        <div className={cx('slider-container')}>
          <Swiper
            targetRef={swiperRef}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              800: {
                slidesPerView: 2,
              },
            }}
            grabCursor={true}
            loop={true}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              slideShadows: false,
              scale: 0.9,
              modifier: 0.7,
            }}
            centeredSlides={true}
          >
            {realtyData.map((slide, i) => (
              <SwiperSlide key={i} class={cx('realty-card-slide')}>
                {<RealtyCard key={i} {...slide} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Realty;
