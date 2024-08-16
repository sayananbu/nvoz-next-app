import React, { FC, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import TabsSwitcher from '~shared/tabs-switcher';
import Text from '~shared/text';
import cn from '~shared/utils/cn';

import { benefits } from '../model/benefits';

const cx = cn('cost-benefits');

const tabs = Object.keys(benefits).map((key) => ({ id: key, title: key }));

const CostBenefits: FC = () => {
  const [additionalActiveTabId, setAdditionalActiveTabId] = useState(tabs[0].id);
  const { ref: benefitsInViewRef, inView: benefitsInView } = useInView({
    threshold: 0.3,
  });

  return (
    <div className={cx()}>
      <div className={cx('tabs')}>
        <TabsSwitcher items={tabs} alternative={true} onTabChange={setAdditionalActiveTabId} />
      </div>
      <motion.ul
        ref={benefitsInViewRef}
        className={cx('content')}
        transition={{
          staggerChildren: 1,
        }}
      >
        <AnimatePresence mode="wait">
          {benefits[additionalActiveTabId].content.map((item, i) => (
            <motion.li
              key={item + i}
              className={cx('list-item')}
              exit={{
                y: -10,
                opacity: 0,
              }}
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={
                benefitsInView && {
                  y: 0,
                  opacity: 1,
                }
              }
              transition={{ duration: 0.3, delay: (i + 1) / 30 }}
            >
              <Text>{item}</Text>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default CostBenefits;
