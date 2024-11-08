import React, { FC } from 'react';

// import ContactForm from '~features/contact-form';
import ContactForm from '~features/contact-form';
import ActionButton from '~shared/action-button';
import BlockHeader from '~shared/block-header';
import BounceAnimation from '~shared/bounce-animation';
import Button from '~shared/button';
import Heading from '~shared/heading';
import Lottie from '~shared/lottie';
import StatisticBar from '~shared/statistic-bar';
import StepperBlock from '~shared/stepper-block';
import Text from '~shared/text';
import cn from '~shared/utils/cn';
import { scrollToForm } from '~shared/utils/scroll-to-form';
import Feedbacks from '~widgets/feedbacks';
import OurServices from '~widgets/our-services';
import Realty from '~widgets/realty';
import Team from '~widgets/team';

import { advantages } from '../model/data';

import houseDealHero from 'public/assets/house_deal.json';
import wavesAnim from 'public/assets/waves.json';
const cx = cn('page');
const about = cn('about');
const benefits = cn('benefits');

// const TIMEOUT_HOLD = 8000;
// const TIMEOUT_REPEAT = 2000;
// const typingSpeed = 30;

const LandingPage: FC = () => {
  //TODO 2 пересмотреть цвета блоков Примеры работ

  return (
    <>
      <div className={cx()}>
        <header className="header">
          <div className={about()}>
            <div className={about('container')}>
              <div className={about('company-info')}>
                <div className={about('company-name')}>
                  <Heading tag="h2" size="lg">
                    Агентство недвижимости
                  </Heading>
                  <Heading tag="h1" size="4xl" className="accent-text">
                    «Новое Время»
                  </Heading>
                </div>

                <Text tag="p" size="5xl" className={about('slogan')}>
                  Ваш надёжный партнёр
                  <br />в мире недвижимости
                </Text>
                <ActionButton
                  className={about('action-button')}
                  variant="solid"
                  textWeight="semibold"
                >
                  Получить бесплатную консультацию
                </ActionButton>
              </div>
              <div className={about('short-contacts')}>
                <Text tag="p">г. Орехово-Зуево, ул. Якова Флиера, д. 9</Text>
                <Heading tag="h4" size="lg">
                  +7 (977) 429-07-29
                </Heading>
              </div>
              <Lottie play speed={0.5} animationData={houseDealHero} className={about('hero')} />
            </div>
            {/* <div className={about('statistics')}>
              <StatisticBar
                value="26+ лет"
                description="Помогаем Вам безопасно покупать, продавать, сдавать и арендовать недвижимость"
              />
              <StatisticBar
                value="20 000+ обращений"
                description="Ежегодно! Клиенты компании получают круглосуточную поддержку и консультации по всем вопросам, связанным с недвижимостью"
              />
              <StatisticBar
                value="8 000+ сделок"
                description="Успешно провели специалисты компании, обеспечив безопасность и комфорт для клиентов"
              />
            </div> */}
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
        {/* <section className={benefits()}>
          <article className={benefits('title')}>
            <Text size="5xl" weight="bold">
              Новое время — новые{' '}
              <Text size="5xl" weight="bold" className="accent-text">
                возможности
              </Text>
            </Text>
            <Text size="3xl">Почему обращаются именно к Нам</Text>
          </article>
          <div className={benefits('container')}>
            {advantages?.map((advantage, i) => <StepperBlock key={i} {...advantage} />)}
          </div>
          <BounceAnimation variant="family" className={benefits('family-animation')} />
          <BounceAnimation variant="keys" delay={1} className={benefits('keys-animation')} />
          <BounceAnimation variant="house" delay={2} className={benefits('house-animation')} />
          <BounceAnimation
            variant="security"
            delay={3}
            className={benefits('security-animation')}
          />
        </section> */}
        <main className={cx('main')}>
          {/* <section>
            <BlockHeader as="header" className={cx('block-header')}>
              Наши услуги
            </BlockHeader>
            <OurServices />
          </section> */}
          <section>
            <Realty />
          </section>
          {/* <section>
            <BlockHeader as="header" className={cx('block-header')}>
              Команда профессионалов
            </BlockHeader>
            <Team />
          </section> */}
          <section>
            <Feedbacks />
          </section>

          <section>
            <BlockHeader as="header" className={cx('block-header')}>
              Свяжитесь с нами
            </BlockHeader>
            <ContactForm />
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
