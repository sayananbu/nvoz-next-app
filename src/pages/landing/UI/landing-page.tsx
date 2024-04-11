'use client';
import React, { FC, useState } from 'react';

import { cn } from '@gravity-ui/page-constructor';
import { Button, Flex, Text } from '@gravity-ui/uikit';
import houseDealHero from 'public/assets/house_deal.json';
import wavesAnim from 'public/assets/waves.json';
import arrowAnim from 'public/assets/arrow.json';
import Lottie from 'react-lottie-player';
import { TypeAnimation } from 'react-type-animation';
import { AnimationDirection } from 'lottie-web';
import BlockHeader from '~shared/block-header';

const cx = cn('landing-page');
const TIMEOUT_HOLD = 8000;
const TIMEOUT_REPEAT = 2000;
const WORDS_PRINT_DELAY = 2500;
const LandingPage: FC = () => {
  const [direction, setDirection] = useState<AnimationDirection>(1);
  const toggleAnimComplete = () => {
    setTimeout(
      () => setDirection(direction > 0 ? -1 : 1),
      direction > 0 ? TIMEOUT_HOLD : TIMEOUT_REPEAT,
    );
  };
  return (
    <>
      <div className={cx()}>
        <Flex direction="column" className={cx('header')}>
          <div className={cx('about')}>
            <Text as="h2" variant="display-2">
              1-ая риэлторская компания
            </Text>
            <Text as="h1" color="brand" variant="display-4">
              «Новое Время»
            </Text>
            <Text as="p" variant="body-3" className={cx('description')}>
              Новое время — новые возможности. Недвижимость, которая открывает горизонты!
            </Text>
            <Button size="xl" view="action" className={cx('action-button')}>
              Оставить заявку
            </Button>
          </div>
          <Lottie
            speed={0.5}
            play
            loop={false}
            animationData={arrowAnim}
            direction={direction}
            onComplete={toggleAnimComplete}
            className={cx('animated-arrow')}
          />
          <Text as="div" variant="display-3" className={cx('animated-text')}>
            <TypeAnimation
              sequence={[
                'Продать и купить недвижимость',
                WORDS_PRINT_DELAY,
                'Арендовать недвижимость',
                WORDS_PRINT_DELAY,
                'Оценить недвижимось',
                WORDS_PRINT_DELAY,
                'Получить консультацию по ипотеке',
                WORDS_PRINT_DELAY,
                'Cопровождение сделок',
                WORDS_PRINT_DELAY,
                'Помощь в оформлении документов',
                WORDS_PRINT_DELAY,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </Text>
          <Lottie play animationData={houseDealHero} className={cx('hero')} />
        </Flex>

        <main className={cx('main')}>
          <BlockHeader>Наши услуги</BlockHeader>
        </main>
      </div>
      <Lottie play speed={0.2} animationData={wavesAnim} className={cx('bottom-vawe')} />
    </>
  );
};

export default LandingPage;
