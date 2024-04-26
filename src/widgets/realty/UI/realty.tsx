import React, { FC } from 'react';

import RealtyCard from '~entities/realty-card';
import { Swiper, SwiperSlide } from '~shared/swiper';
import cn from '~shared/utils/cn';

import { realtyData } from '../model/realty-data';

interface RealtyProps {
  className?: 'string';
}

const cx = cn('realty');

const Realty: FC<RealtyProps> = (props) => {
  const { className } = props;
  return (
    <div className={cx('', className)}>
      <div className={cx('slider-container')}>
        <Swiper
          slidesPerView={3}
          grabCursor={true}
          navigation={true}
          autoplay={false}
          effect="coverflow"
          coverflowEffect={{
            slideShadows: false,
            scale: 0.9,
            modifier: 0.6,
          }}
          // centeredSlides={true}
        >
          {realtyData.map((slide, i) => (
            <SwiperSlide key={i} class={cx('realty-card-slide')}>
              {<RealtyCard key={i} {...slide} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Realty;
