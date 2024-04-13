'use client';
import React, { FC } from 'react';

import { cn } from '@gravity-ui/page-constructor';
import { Button, Flex, Text } from '@gravity-ui/uikit';
import Lottie from 'react-lottie-player';
import { TypeAnimation } from 'react-type-animation';

import AnimatedArrow from '~shared/animated-arrow';
import BlockHeader from '~shared/block-header';
import StepperBlock from '~shared/stepper-block';
import OurServices from '~widgets/our-services';

import { advantages, typingText } from '../model/data';

import chillAnim from 'public/assets/chill.json';
import houseDealHero from 'public/assets/house_deal.json';
import wavesAnim from 'public/assets/waves.json';

const cx = cn('landing-page');

const TIMEOUT_HOLD = 8000;
const TIMEOUT_REPEAT = 2000;
const typingSpeed = 30;

const LandingPage: FC = () => {
  return (
    <>
      <div className={cx()}>
        <Flex as="header" direction="column" className={cx('header')}>
          <article className={cx('about')}>
            <Text as="h2" variant="display-2">
              1-ая риэлторская компания
            </Text>
            <Flex direction="column" gap="1">
              <Text as="h1" color="brand" variant="display-4">
                «Новое Время»
              </Text>
              <Text as="h4" variant="body-3">
                г. Орехово-Зуево, ул. Якова Флиера, д. 9
              </Text>
            </Flex>
            <Button size="xl" view="action" className={cx('action-button')}>
              Оставить заявку
            </Button>
          </article>
          <AnimatedArrow
            startTimeout={TIMEOUT_REPEAT}
            endTimeout={TIMEOUT_HOLD}
            speed={0.5}
            play
            loop={false}
            className={cx('animated-arrow')}
          />
          <Text as="div" variant="display-3" className={cx('animated-text')}>
            <TypeAnimation
              sequence={typingText}
              wrapper="span"
              speed={typingSpeed}
              repeat={Infinity}
            />
          </Text>
          <Lottie play speed={0.5} animationData={houseDealHero} className={cx('hero')} />
        </Flex>
        <Flex as="section" direction="column" alignItems="flex-end" className={cx('slogan')}>
          <Lottie play animationData={chillAnim} className={cx('slogan__animation')} />
          <Flex direction="column" alignItems="center" className={cx('slogan__container')}>
            <Flex direction="column" gap="2" alignItems="center" className={cx('slogan__title')}>
              <Text as="h2" variant="display-2">
                Новое время — новые{' '}
                <Text variant="display-2" color="brand">
                  возможности
                </Text>
              </Text>
              <Text variant="header-2">Или почему обращаются именно к Нам</Text>
            </Flex>
            {advantages?.map((advantage, i) => <StepperBlock key={i} {...advantage} />)}
          </Flex>
        </Flex>
        <main className={cx('main')}>
          <section>
            <BlockHeader className={cx('services-header')}>Наши услуги</BlockHeader>
            <OurServices />
          </section>
        </main>
      </div>
      <div className={cx('wave')}>
        <Lottie play speed={0.2} animationData={wavesAnim} className={cx('wave__animation')} />
      </div>
    </>
  );
};

export default LandingPage;
