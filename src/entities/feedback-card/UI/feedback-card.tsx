'use client';

import React, { FC } from 'react';

import { useInView } from 'react-intersection-observer';

import Text from '~shared/text';
import cn from '~shared/utils/cn';
import { Feedback } from '~widgets/feedbacks';

const cx = cn('feedback-card');

const COLORS = ['#0f8df5', '#f50f4f', '#ab0ff5', '#11c216', '#7736cb', '#11c27d', '#8d344d'];

const FeedbackCard: FC<Feedback> = (props) => {
  const { name, deal, content } = props;
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  const randomColorIndex = Math.floor(Math.random() * COLORS.length);
  const iconLetters = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div className={cx()} ref={inViewRef}>
      <div className={cx('header')}>
        <div className={cx('icon')} style={{ backgroundColor: COLORS[randomColorIndex] }}>
          <Text>{iconLetters}</Text>
        </div>
        <div className={cx('info')}>
          <Text tag="p" className={cx('name')}>
            {name}
          </Text>
          <div className={cx('dot')}></div>
          <Text tag="p" className={cx('deal')}>
            {deal}
          </Text>
        </div>
      </div>
      <Text tag="p" className={cx('content')}>
        <Text className={cx('content__cover', { visible: inView })}>{content}</Text>
        {content}
      </Text>
    </div>
  );
};

export default FeedbackCard;
