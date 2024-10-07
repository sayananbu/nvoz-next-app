import React, { FC, ReactNode } from 'react';

import Accordion from '~shared/accordion';
import Amount from '~shared/amount';
import Text from '~shared/text';
import cn from '~shared/utils/cn';

import { Service } from '../model/types';

interface ServiceBarProps {
  modalContent?: ReactNode;
  service: Service;
}

const cx = cn('service-bar');

const ServiceBar: FC<ServiceBarProps> = (props) => {
  const {
    service: { title, price, content },
  } = props;

  const isPriceNum = typeof price === 'number';
  const isContentPlain = content?.type === 'text';

  return (
    <Accordion
      title={
        <>
          <Text className={cx('title')} size="2xl">
            {title}
          </Text>
          {isPriceNum ? (
            <Text tag="p" className={cx('price')} size="xl" weight="bold">
              от <Amount size="2xl" weight="bold" value={price} addon="₽" />
            </Text>
          ) : (
            <Text className={cx('price')} size="2xl" tag="p" weight="bold">
              {price}
            </Text>
          )}
        </>
      }
    >
      {isContentPlain ? (
        <Text className={cx('content__text')}>{content?.payload[0] as string}</Text>
      ) : (
        content && (
          <div className={cx('content')}>
            {content?.payload.map((text, i) => (
              <div key={i} className={cx('content__text')}>
                <Text>{text.type}</Text>
                <Text tag="p">{text.cost}</Text>
              </div>
            ))}
          </div>
        )
      )}
    </Accordion>
  );
};

export default ServiceBar;
