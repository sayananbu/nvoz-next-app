'use client';
import React, { FC } from 'react';

import { Card, Link, Text } from '@gravity-ui/uikit';

import cn from '~shared/utils/cn';
import { Feedback } from '~widgets/feedbacks';

const cx = cn('feedback-card');

const COLORS = ['#0f8df5', '#ab0ff5', '#f50f4f', '#11c216', '#e3db0e'];

const FeedbackCard: FC<Feedback> = (props) => {
  const { name, deal, content, url } = props;

  const randomColorIndex = Math.floor(Math.random() * (COLORS.length - 1));
  const iconLetters = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <Card className={cx()} type="container" view="filled">
      <div className={cx('header')}>
        <div className={cx('icon')} style={{ backgroundColor: COLORS[randomColorIndex] }}>
          <Text variant="header-2">{iconLetters}</Text>
        </div>
        <div className={cx('info')}>
          <Text variant="header-1" as="p" className={cx('name')}>
            {name}
          </Text>
          <div className={cx('dot')}></div>
          <Text variant="body-2" as="p">
            {deal}
          </Text>
        </div>
      </div>
      <Text as="p" className={cx('content')} variant="body-3">
        {content}
      </Text>
      <Text variant="header-1" className={cx('link')}>
        <Link href={url} target="_blank">
          Ссылка на отзыв
        </Link>
      </Text>
    </Card>
  );
};

export default FeedbackCard;
