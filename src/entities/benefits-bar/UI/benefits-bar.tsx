import React, { FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import Text from '~shared/text';
import cn from '~shared/utils/cn';

import CheckIcon from '/public/icons/check.svg';

const cx = cn('benefits-bar');

interface BenefitsBarProps {
  benefits: { type: string; content: string[] };
  label: string;
  order?: number;
}

const BenefitsBar: FC<BenefitsBarProps> = (props) => {
  const { benefits, label, order = 0 } = props;

  const { ref: benefitsInViewRef, inView: benefitsInView } = useInView({
    threshold: 0.3,
  });

  return (
    <div className={cx()}>
      <Text tag="p" size="3xl" weight="bold" className={cx('label')}>
        {label}
      </Text>
      <motion.ul
        ref={benefitsInViewRef}
        className={cx('content')}
        transition={{
          staggerChildren: 1,
        }}
      >
        <AnimatePresence mode="wait">
          {benefits.content.map((item, i) => (
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
              transition={{ duration: 0.3, delay: (i + 1 + order * 8) / 15 }}
            >
              <Image
                className={cx('check-icon')}
                src={CheckIcon.src}
                objectFit="cover"
                width="25"
                height="25"
                alt="check"
              />
              <Text>{item}</Text>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default BenefitsBar;
