'use client';

import React, { FC } from 'react';

import { Card, Link, Text } from '@gravity-ui/uikit';
import { useInView } from 'react-intersection-observer';

import cn from '~shared/utils/cn';
import { Feedback } from '~widgets/feedbacks';

const cx = cn('feedback-card');

const COLORS = ['#0f8df5', '#f50f4f', '#ab0ff5', '#11c216', '#7736cb', '#11c27d', '#8d344d'];

const FeedbackCard: FC<Feedback> = (props) => {
  const { name, deal, content, url } = props;
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  const randomColorIndex = Math.floor(Math.random() * (COLORS.length - 1));
  const iconLetters = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <Card className={cx()} type="container" view="filled" ref={inViewRef}>
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
        <span className={cx('content__cover', { visible: inView })}>{content}</span>
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
