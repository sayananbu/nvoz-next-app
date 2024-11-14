import React from 'react';

import BounceAnimation from '~shared/bounce-animation';
import StepperBlock from '~shared/stepper-block';
import Text from '~shared/text';
import cn from '~shared/utils/cn';

import { benefits } from '../model/benefits';

const cx = cn('benefits');
const title = cn('benefits__title');

const Benefits = () => {
  return (
    <section className={cx()}>
      <article className={cx('title')}>
        <Text size="2xl" weight="bold" className={title('slogan')}>
          <Text size="2xl" weight="bold" className={title('slogan_accent') + ' accent-text'}>
            Время
          </Text>{' '}
          — наш самый ценный{' '}
          <Text size="2xl" weight="bold" className={title('slogan_accent') + ' accent-text'}>
            ресурс
          </Text>
        </Text>
        <Text size="sm" className={title('description')}>
          Именно поэтому, агентство недвижимости{' '}
          <Text
            size="sm"
            weight="semibold"
            className={title('description_accent') + ' accent-text'}
          >
            «Новое Время»
          </Text>{' '}
          — это самая{' '}
          <Text
            size="sm"
            weight="semibold"
            className={title('description_accent') + ' accent-text'}
          >
            эффективная инвестиция
          </Text>{' '}
          Вашего времени для достижения желаемого результата в сфере недвижимости
        </Text>
      </article>
      <div className={cx('container')}>
        {benefits?.map((advantage, i) => <StepperBlock key={i} {...advantage} />)}
      </div>
      <BounceAnimation variant="family" className={cx('family-animation')} />
      {/* <BounceAnimation variant="keys" delay={0.5} className={cx('keys-animation')} />
      <BounceAnimation variant="house" delay={1} className={cx('house-animation')} />
      <BounceAnimation variant="security" delay={1.5} className={cx('security-animation')} /> */}
    </section>
  );
};

export default Benefits;
