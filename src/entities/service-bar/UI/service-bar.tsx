import React, { FC, ReactNode } from 'react';

import { Text } from '@gravity-ui/uikit';

import Accordion from '~shared/accordion';
import Amount from '~shared/amount';
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
          <Text as="header" variant="header-1" className={cx('title')}>
            {title}{' '}
          </Text>
          {isPriceNum ? (
            <Text as="p" variant="header-1" className={cx('price')}>
              от <Amount variant="header-2" value={price} addon="₽" />
            </Text>
          ) : (
            <Text variant="header-2" className={cx('price')}>
              {price}
            </Text>
          )}
        </>
      }
    >
      {isContentPlain ? (
        <Text variant="body-3" className={cx('content__text')}>
          {content?.payload[0] as string}
        </Text>
      ) : (
        content && (
          <div className={cx('content')}>
            {content?.payload.map((text, i) => (
              <div key={i} className={cx('content__text')}>
                <Text variant="body-2">{text.type}</Text>
                <Text as="p" variant="body-3">
                  {text.cost}
                </Text>
              </div>
            ))}
          </div>
        )
      )}
    </Accordion>
  );
};

export default ServiceBar;
