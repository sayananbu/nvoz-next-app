'use client';

import TabsSwitcher from '~shared/tabs-switcher';
import cn from '~shared/utils/cn';

import { tabsItems } from '../model/tabs-items';
import ServiceBar from '~entities/service-bar';
import { useState } from 'react';
import { services } from '../model/services';
import MortgageBar from '~entities/mortgage-bar';
import Button from '~shared/button';

const cx = cn('our-services');

const OurServices = () => {
  const initTab = Object.keys(services)[0];
  const [activeTab, setActiveTab] = useState<string | number>(initTab);
  const isMortgageTab = activeTab === 'Ипотека';
  return (
    <div className={cx()}>
      <div className={cx('tabs')}>
        <TabsSwitcher items={tabsItems} initTabId={initTab} onTabChange={setActiveTab} />
      </div>
      <div className={cx('container')}>
        {!isMortgageTab && (
          <div className={cx('list')}>
            {services[activeTab].map((service) => (
              <ServiceBar key={activeTab + service.title} service={service} />
            ))}
          </div>
        )}
        {isMortgageTab && (
          <div className={cx('mortgage')}>
            {services[activeTab].map(({ title, list }) => (
              <MortgageBar key={activeTab + title} title={title} list={list} />
            ))}
            <Button view="action" size="xl" className={cx('mortgage__action-button')}>
              Получить бесплатную консультацию
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;
