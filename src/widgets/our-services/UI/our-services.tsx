'use client';

import { useState } from 'react';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import MortgageBar from '~entities/mortgage-bar';
import ServiceBar from '~entities/service-bar';
import BlockHeader from '~shared/block-header';
import Button from '~shared/button';
import Lottie from '~shared/lottie';
import TabsSwitcher from '~shared/tabs-switcher';
import cn from '~shared/utils/cn';
import CostBenefits from '~widgets/cost-benefits';

import { services } from '../model/services';

import servicesAnim from 'public/assets/services.json';

const cx = cn('our-services');

const tabsItems = Object.keys(services).map((key) => ({ id: key, title: key }));

const OurServices = () => {
  const initTab = Object.keys(services)[0];
  const [activeTab, setActiveTab] = useState<string | number>(initTab);
  const { ref: servicesInViewRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const isMortgageTab = activeTab === 'Ипотека';

  return (
    <div className={cx()}>
      <div className={cx('tabs')}>
        <TabsSwitcher items={tabsItems} initTabId={initTab} onTabChange={setActiveTab} />
      </div>
      <div className={cx('container')}>
        <div className={cx('list')} ref={servicesInViewRef}>
          <LayoutGroup>
            <AnimatePresence mode="wait">
              {services[activeTab].map((service, i, arr) => (
                <motion.div
                  key={activeTab + service.title + i}
                  exit={{
                    x: arr.length * 10 - 10 * (i + 1),
                    opacity: 0,
                  }}
                  initial={{
                    x: -10 * (i + 1),
                    opacity: 0,
                  }}
                  animate={servicesInView && { x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: (i + 1) / 30 }}
                >
                  {isMortgageTab ? (
                    <MortgageBar
                      key={activeTab + service.title}
                      title={service.title}
                      list={service.list}
                    />
                  ) : (
                    <ServiceBar service={service} />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.div layoutId="action-button">
              <Button size="lg" className={cx('action-button')}>
                {isMortgageTab ? 'Получить бесплатную консультацию' : 'Оставить заявку'}
              </Button>
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
      <article className={cx('benefits')}>
        <BlockHeader as="header" subtitle="" className={cx('block-header')}>
          Что входит в стоимость услуг?
        </BlockHeader>
        <CostBenefits />
      </article>
      <Lottie play animationData={servicesAnim} className={cx('services-animation')} />
    </div>
  );
};

export default OurServices;
