import React from 'react';

import { cn } from '@gravity-ui/page-constructor';

import TabsSwitcher from '~shared/tabs-switcher';
import { TabItem } from '~shared/tabs-switcher/model/types';

const cx = cn('our-services');

const servicesList: TabItem[] = [
  {
    id: 'buy',
    title: 'Купить',
  },
  {
    id: 'sale',
    title: 'Продать',
  },
  {
    id: 'rent',
    title: 'Сдать',
  },
  {
    id: 'change',
    title: 'Обменять',
  },
];

const OurServices = () => {
  return (
    <div className={cx()}>
      <TabsSwitcher items={servicesList} />
    </div>
  );
};

export default OurServices;
