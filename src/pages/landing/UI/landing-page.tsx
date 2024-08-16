import React, { FC } from 'react';

import ContactForm from '~features/contact-form';
import AnimatedArrow from '~shared/animated-arrow';
import BlockHeader from '~shared/block-header';
import Button from '~shared/button';
import Heading from '~shared/heading';
import Lottie from '~shared/lottie';
import StatisticBar from '~shared/statistic-bar';
import StepperBlock from '~shared/stepper-block';
import Text from '~shared/text';
import TypeAnimation from '~shared/type-animation';
import cn from '~shared/utils/cn';
import Feedbacks from '~widgets/feedbacks';
import Map from '~widgets/map';
import OurServices from '~widgets/our-services';
import Realty from '~widgets/realty';
import Team from '~widgets/team';

import { advantages, typingText } from '../model/data';

import chillAnim from 'public/assets/chill.json';
import houseDealHero from 'public/assets/house_deal.json';
import wavesAnim from 'public/assets/waves.json';
const cx = cn('page');
const about = cn('about');
const slogan = cn('slogan');

const TIMEOUT_HOLD = 8000;
const TIMEOUT_REPEAT = 2000;
const typingSpeed = 30;
const LandingPage: FC = () => {
  return (
    <>
      <div className={cx()}>
        <header className="header">
          <div className={about()}>
            <div className={about('container')}>
              <div className={about('company-name')}>
                <Heading tag="h1" size="4xl" className="accent-text">
                  «Новое Время»
                </Heading>
                <Heading tag="h2" size="lg">
                  1-ая риэлторская компания
                </Heading>
                <Button className={about('action-button')} variant="solid" textWeight="semibold">
                  Получить бесплатную консультацию
                </Button>
              </div>
              <div className={about('short-contacts')}>
                <Text tag="p">г. Орехово-Зуево, ул. Якова Флиера, д. 9</Text>
                <Heading tag="h4" size="lg">
                  +7 (977) 429-07-29
                </Heading>
              </div>
              <Lottie play speed={0.5} animationData={houseDealHero} className={about('hero')} />
            </div>
            <div className={about('statistics')}>
              <StatisticBar
                value="26+ лет"
                description="Помогаем Вам покупать, продавать и арендовать недвижимость"
              />
              <StatisticBar
                value="30+ городов"
                description="С объектами в которых мы уже работали и продолжаем работать"
              />
              <StatisticBar
                value="2000+ сделок"
                description="Успешно проведены нашими специалистами"
              />
            </div>
          </div>

          {/* <Text tag="p" size='6xl' className={cx('animated-text')}>
            <TypeAnimation
              sequence={typingText}
              wrapper="span"
              speed={typingSpeed}
              repeat={Infinity}
            />
          </Text> */}
        </header>
        <section className={slogan()}>
          {/* <Lottie play animationData={chillAnim} className={cx('slogan__animation')} /> */}

          <article className={slogan('title')}>
            <Text size="5xl" weight="bold">
              Новое время — новые{' '}
              <Text size="5xl" weight="bold" className="accent-text">
                возможности
              </Text>
            </Text>
            <Text size="3xl">Вот почему обращаются именно к Нам</Text>
          </article>
          <div className={slogan('container')}>
            {advantages?.map((advantage, i) => <StepperBlock key={i} {...advantage} />)}
          </div>
        </section>

        <main className={cx('main')}>
          <section>
            <BlockHeader as="header" className={cx('block-header')}>
              Наши услуги
            </BlockHeader>
            <OurServices />
          </section>
          {/* <section>
            <Realty />
          </section>
          <section>
            <BlockHeader as="header" className={cx('block-header')}>
              Команда профессионалов
            </BlockHeader>
            <Team />
          </section>
          <section>
            <Feedbacks />
          </section>
          <section>
            <BlockHeader as="header" className={cx('block-header')}>
              Оставить заявку
            </BlockHeader>
            <ContactForm />
          </section>*/}
          <section>
            <Map />
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
