'use client';
import { FC, ReactNode, useEffect, useRef } from 'react';

import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

type SwiperProps = SwiperOptions & { children: ReactNode };

export const Swiper: FC<SwiperProps> = (props) => {
  const { children, ...rest } = props;

  const swiperRef = useRef(null);

  useEffect(() => {
    register();
    const params = {
      ...rest,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
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
