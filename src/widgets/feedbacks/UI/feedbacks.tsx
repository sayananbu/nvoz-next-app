'use client';
import React, { useRef } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import BlockHeader from '~shared/block-header';
import SliderControls from '~shared/slider-controls';
import { Swiper, SwiperSlide } from '~shared/swiper';
import Text from '~shared/text';
import cn from '~shared/utils/cn';

import { feedbacks } from '../model/feedbacks';

const FeedbackCard = dynamic(() => import('~entities/feedback-card'), { ssr: false });

const cx = cn('feedbacks');

const Feedbacks = () => {
  const swiperRef = useRef(null);
  //Благодаря индивидуальному подходу и профессионализму специалистов, клиенты агентства оставляют положительные отзывы и рекомендуют нас своим знакомым
  return (
    <>
      <div className={cx('block-header')}>
        <BlockHeader as="header" className={cx('text')}>
          Что о нас говорят
        </BlockHeader>
        <SliderControls swiper={swiperRef} />
      </div>
      <div className={cx()}>
        <Text tag="p" className={cx('referer')}>
          Эти и другие отзывы также можно посмотреть на{' '}
          <Link target="_blank" className={cx('link')} href="https://yandex.ru/maps/-/CDbBQUmi">
            Яндекс Картах
          </Link>
        </Text>
        <div className={cx('slider-container')}>
          <Swiper
            targetRef={swiperRef}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            spaceBetween={10}
          >
            {feedbacks.map((review, i) => (
              <SwiperSlide key={i} class={cx('feedback-card-slide')}>
                {<FeedbackCard {...review} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
