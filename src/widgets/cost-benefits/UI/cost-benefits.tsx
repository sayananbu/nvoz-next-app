import React, { FC, useState } from 'react';

import { SealCheck } from '@gravity-ui/icons';
import { Text } from '@gravity-ui/uikit';
import { AnimatePresence, motion } from 'framer-motion';

import TabsSwitcher from '~shared/tabs-switcher';
import cn from '~shared/utils/cn';

import { benefits } from '../model/benefits';

const cx = cn('cost-benefits');

const tabs = Object.keys(benefits).map((key) => ({ id: key, title: key }));

const CostBenefits: FC = () => {
  const [additionalActiveTabId, setAdditionalActiveTabId] = useState(tabs[0].id);

  return (
    <div className={cx()}>
      <div className={cx('tabs')}>
        <TabsSwitcher items={tabs} alternative={true} onTabChange={setAdditionalActiveTabId} />
      </div>
      <motion.ul
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
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.3, delay: (i + 1) / 30 }}
            >
              <SealCheck className={cx('check-icon')} />
              <Text variant="body-3">{item}</Text>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default CostBenefits;
