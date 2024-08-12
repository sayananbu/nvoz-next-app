import React, { FC } from 'react';

import { Card, Text } from '@gravity-ui/uikit';
import Image from 'next/image';

import Amount from '~shared/amount';
import { Swiper, SwiperSlide } from '~shared/swiper';
import cn from '~shared/utils/cn';
import { RealtyObject, RealtyType } from '~widgets/realty';

const cx = cn('realty-card');

const RealtyCard: FC<RealtyObject> = (props) => {
  const { type, cost, images, costPerMeter, rooms, area, floor, floorTotal, address } = props;
  const isFlat = (type as RealtyType) === RealtyType.FLAT;

  const formatRooms = isFlat ? `${rooms}-комн. кв.` : `${rooms}-комн. дом`;

  const formatFloor = isFlat ? `${floor}/${floorTotal} эт.` : `${floorTotal} эт.`;

  return (
    <Card className={cx()} view="filled" theme="warning">
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
        <Amount value={cost} addon="₽" />
      </div>
      <div>
        <Amount value={costPerMeter} addon="₽/м²" variant="body-2" color="secondary" />
      </div>
      <div className={cx('details')}>
        <Text variant="body-3">{formatRooms}</Text>
        <Text variant="body-3">{`${area} м²`}</Text>
        <Text variant="body-3">{formatFloor}</Text>
      </div>
      <div>
        <Text color="secondary">{address}</Text>
      </div>
    </Card>
  );
};

export default RealtyCard;
