import React, { FC } from 'react';

import { Text } from '@gravity-ui/uikit';

import AnimatedArrow from '~shared/animated-arrow';
import BlockHeader from '~shared/block-header';
import Button from '~shared/button';
import Lottie from '~shared/lottie';
import StepperBlock from '~shared/stepper-block';
import TypeAnimation from '~shared/type-animation';
import OurServices from '~widgets/our-services';

import { advantages, typingText } from '../model/data';

import chillAnim from 'public/assets/chill.json';
import houseDealHero from 'public/assets/house_deal.json';
import wavesAnim from 'public/assets/waves.json';
import cn from '~shared/utils/cn';

const cx = cn('landing-page');

const TIMEOUT_HOLD = 8000;
const TIMEOUT_REPEAT = 2000;
const typingSpeed = 30;

const LandingPage: FC = () => {
  return (
    <>
      <div className={cx()}>
        <div className={cx('header')}>
          <article className={cx('about')}>
            <Text as="h2" variant="display-2">
              1-ая риэлторская компания
            </Text>
            <div>
              <Text as="h1" color="brand" variant="display-4">
                «Новое Время»
              </Text>
              <Text as="h4" variant="body-3">
                г. Орехово-Зуево, ул. Якова Флиера, д. 9
              </Text>
            </div>
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
        </div>
        <section className={cx('slogan')}>
          <Lottie play animationData={chillAnim} className={cx('slogan__animation')} />
          <div className={cx('slogan__container')}>
            <article className={cx('slogan__title')}>
              <Text as="h2" variant="display-2">
                Новое время — новые{' '}
                <Text variant="display-2" color="brand">
                  возможности
                </Text>
              </Text>
              <Text variant="header-2">Или почему обращаются именно к Нам</Text>
            </article>
            {advantages?.map((advantage, i) => <StepperBlock key={i} {...advantage} />)}
          </div>
        </section>
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
