'use client';
import React, { FC, useEffect, useState } from 'react';

import { Text } from '@gravity-ui/uikit';
import { motion } from 'framer-motion';

import cn from '~shared/utils/cn';

import { TabItem } from '../model/types';

const cx = cn('tabs-switcher');

interface TabsSwitcherProps {
  items: TabItem[];
  alternative?: boolean;
  initTabId?: string;
  onTabChange?: (id: TabItem['id']) => void;
}

const TabsSwitcher: FC<TabsSwitcherProps> = (props) => {
  const { items, initTabId, alternative, onTabChange } = props;

  const [selectedTabId, setSelectedTabId] = useState<TabItem['id']>(initTabId || items[0].id);

  const underlineLayoutId = items.map((id) => id).join('');

  const handleTabClick = (tabId: TabItem['id']) => {
    if (tabId !== selectedTabId) {
      setSelectedTabId(tabId);
      onTabChange?.(tabId);
    }
  };

  useEffect(() => {
    if (initTabId) {
      handleTabClick(initTabId);
    }
  }, [initTabId]);

  return (
    <div className={cx('', { alternative })}>
      {items.map((item) => (
        <div key={item.id} className={cx('tab')} onClick={() => handleTabClick(item.id)}>
          <Text
            as="p"
            variant="header-1"
            className={cx('tab__title', { active: item.id === selectedTabId && !alternative })}
          >
            {item.title}
          </Text>
          {item.id === selectedTabId && (
            <motion.div
              className={cx('tab_active', { alternative })}
              layoutId={'underline' + underlineLayoutId}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabsSwitcher;
