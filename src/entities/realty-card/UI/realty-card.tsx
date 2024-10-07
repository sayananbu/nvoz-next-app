import React, { FC } from 'react';

import Image from 'next/image';

import Amount from '~shared/amount';
import { Swiper, SwiperSlide } from '~shared/swiper';
import Text from '~shared/text';
import cn from '~shared/utils/cn';
import { RealtyObject, RealtyType } from '~widgets/realty';

const cx = cn('realty-card');

const RealtyCard: FC<RealtyObject> = (props) => {
  const { type, cost, images, costPerMeter, rooms, area, floor, floorTotal, address } = props;
  const isFlat = (type as RealtyType) === RealtyType.FLAT;

  const formatRooms = isFlat ? `${rooms}-комн. кв.` : `${rooms}-комн. дом`;

  const formatFloor = isFlat ? `${floor}/${floorTotal} эт.` : `${floorTotal} эт.`;

  return (
    <div className={cx()}>
      <div className={cx('slider-container')}>
        <Swiper
          slidesPerView={1}
          loop={true}
          nested={true}
          pagination={{
            clickable: true,
          }}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <div className={cx('slide')}>
                <div className={cx('image')}>
                  <Image
                    src={image}
                    alt="Изображение объекта недвижимости"
                    fill={true}
                    sizes="100%"
                    quality={70}
                    objectFit="cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={cx('cost')}>
        <Amount value={cost} weight="bold" size="2xl" addon="₽" />
      </div>
      <div>
        <Amount value={costPerMeter} addon="₽/м²" />
      </div>
      <div className={cx('details')}>
        <Text>{formatRooms}</Text>
        <Text>{`${area} м²`}</Text>
        <Text>{formatFloor}</Text>
      </div>
      <div>
        <Text size="md">{address}</Text>
      </div>
    </div>
  );
};

export default RealtyCard;
