'use client';

import React, { FC, LegacyRef, ReactNode, useEffect, useRef, useState } from 'react';

import { Card, Popup, Text, ThemeProvider } from '@gravity-ui/uikit';

import Button from '~shared/button';
import cn from '~shared/utils/cn';
import { useCycle } from 'framer-motion';
import { Service } from '../model/types';
import Amount from '~shared/amount';

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
  const [isOpen, toggleIsOpen] = useCycle(false, true);
  const [barWidth, setBarWidth] = useState(0);
  const linkRef = useRef<Element>(null);

  useEffect(() => {
    function resizePopup() {
      const rect = linkRef.current?.getBoundingClientRect() as DOMRect;
      setBarWidth(rect.width);
    }
    resizePopup();
    window.addEventListener('resize', resizePopup);
    return () => window.removeEventListener('resize', resizePopup);
  }, []);

  return (
    <ThemeProvider theme="dark">
      <Card className={cx()} view="filled" ref={linkRef as LegacyRef<HTMLDivElement>}>
        <Text as="header" variant="header-1" className={cx('title')}>
          {title}
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
        {content && (
          <div className={cx('link')}>
            <Button
              selected={isOpen}
              view="outlined-action"
              width="max"
              size="l"
              onClick={() => toggleIsOpen()}
            >
              Подробнее
            </Button>
          </div>
        )}

        <Popup
          anchorRef={linkRef}
          open={isOpen}
          placement="bottom"
          style={{ width: `${barWidth}px` }}
          className={cx('popup')}
          onOutsideClick={() => toggleIsOpen()}
        >
          <Card view="filled" className={cx('popup-content')}>
            <Text variant="header-2" className={cx('popup-content__title')}>
              Стоимость услуги
            </Text>

            {isContentPlain ? (
              <Text variant="body-3" className={cx('popup-content__text')}>
                {content?.payload[0] as string}
              </Text>
            ) : (
              content?.payload.map((text, i) => (
                <div key={i} className={cx('popup-content__text')}>
                  <Text variant="body-2">{text.type}</Text>
                  <Text as="p" variant="body-3">
                    {text.cost}
                  </Text>
                </div>
              ))
            )}
          </Card>
        </Popup>
      </Card>
    </ThemeProvider>
  );
};

export default ServiceBar;
