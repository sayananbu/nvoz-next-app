'use client';
import React, { FC } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Text from '~shared/text';
import cn from '~shared/utils/cn';

const cx = cn('stepper-block');

interface StepperBlockProps {
  title: string;
  description?: string;
}

const StepperBlock: FC<StepperBlockProps> = (props) => {
  const { title, description } = props;
  const { ref: inViewRef, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div className={cx()} ref={inViewRef}>
      <div className={cx('text')}>
        <Text size="sm" tag="p" weight="bold" className={cx('title')}>
          {title}
        </Text>
        {description && (
          <Text tag="p" size="xs" className={cx('description')}>
            <motion.span
              className={cx('description__cover')}
              initial={{ height: 0 }}
              animate={inView && { height: '100%' }}
              transition={{
                duration: 1,
              }}
            >
              {description}
            </motion.span>
            {description}
          </Text>
        )}
      </div>

      <motion.div
        className={cx('dot')}
        initial={{ scale: 0 }}
        animate={inView && { scale: 1 }}
        transition={{ duration: 0.4 }}
      ></motion.div>
      <motion.div
        className={cx('line')}
        initial={{ height: 0 }}
        animate={
          inView && {
            height: '100%',
          }
        }
        transition={{ duration: 0.6, delay: 0.2 }}
      ></motion.div>
    </div>
  );
};

export default StepperBlock;
