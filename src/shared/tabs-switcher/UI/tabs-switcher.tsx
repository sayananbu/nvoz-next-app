'use client';
import React, { FC, useState } from 'react';

import { Text } from '@gravity-ui/uikit';
import { motion } from 'framer-motion';

import cn from '~shared/utils/cn';

import { TabItem } from '../model/types';

const cx = cn('tabs-switcher');

interface TabsSwitcherProps {
  items: TabItem[];
  initTabId?: number | string;
  onTabChange?: (id: TabItem['id']) => void;
}

const TabsSwitcher: FC<TabsSwitcherProps> = (props) => {
  const { items, initTabId, onTabChange } = props;

  const [selectedTabId, setSelectedTabId] = useState<TabItem['id']>(initTabId || items[0].id);

  const handleTabClick = (tabId: TabItem['id']) => {
    if (tabId !== selectedTabId) {
      setSelectedTabId(tabId);
      onTabChange?.(tabId);
    }
  };
  return (
    <div className={cx()}>
      {items.map((item) => (
        <div key={item.id} className={cx('tab')} onClick={() => handleTabClick(item.id)}>
          <Text
            as="p"
            variant="header-1"
            className={cx('tab__title', { active: item.id === selectedTabId })}
          >
            {item.title}
          </Text>
          {item.id === selectedTabId && (
            <motion.div className={cx('tab_active')} layoutId="underline" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabsSwitcher;
