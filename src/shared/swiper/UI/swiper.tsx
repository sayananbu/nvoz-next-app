'use client';
import { FC, ReactNode, useEffect, useRef } from 'react';

import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

type SwiperProps = SwiperOptions & { children: ReactNode } & { targetRef?: { current: any } };

export const Swiper: FC<SwiperProps> = (props) => {
  const { children, targetRef, ...rest } = props;

  const swiperRef = useRef(null);

  const handleSetSwiperInstance = () => {
    if (targetRef) {
      targetRef.current = swiperRef.current;
    }
  };

  useEffect(() => {
    register();
    const params = {
      ...rest,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
    handleSetSwiperInstance();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
};
export function SwiperSlide(props) {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
