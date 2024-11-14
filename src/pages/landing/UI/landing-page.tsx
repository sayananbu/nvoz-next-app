import React, { FC } from 'react';

import ContactForm from '~features/contact-form';
import ActionButton from '~shared/action-button';
import BlockHeader from '~shared/block-header';
import Heading from '~shared/heading';
import Lottie from '~shared/lottie';
import StatisticBar from '~shared/statistic-bar';
import Text from '~shared/text';
import cn from '~shared/utils/cn';
import Benefits from '~widgets/benefits';
import Feedbacks from '~widgets/feedbacks';
// import OurServices from '~widgets/our-services';
import Realty from '~widgets/realty';
// import Team from '~widgets/team';

import './landing-page.css';

import houseDealHero from 'public/assets/house_deal.json';
import wavesAnim from 'public/assets/waves.json';
const cx = cn('page');
const about = cn('about');

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
                  <Heading tag="h2" size="xs" className={about('company-name_first')}>
                    Агентство недвижимости
                  </Heading>
                  <Heading
                    tag="h1"
                    size="lg"
                    className={about('company-name_second', 'accent-text')}
                  >
                    «Новое Время»
                  </Heading>
                </div>

                <Text tag="p" size="xl" className={about('slogan')}>
                  Ваш надёжный партнёр
                  <br /> в мире недвижимости
                </Text>
                <ActionButton
                  className={about('action-button')}
                  variant="solid"
                  textWeight="semibold"
                >
                  Оставить заявку
                </ActionButton>
              </div>
              <div className={about('short-contacts')}>
                <Text tag="p" size="sm">
                  г. Орехово-Зуево, ул. Якова Флиера, д. 9
                </Text>
                <Heading tag="h4" size="sm">
                  +7 (977) 429-07-29
                </Heading>
              </div>
              <Lottie play speed={0.5} animationData={houseDealHero} className={about('hero')} />
            </div>
            <div className={about('statistics')}>
              <StatisticBar
                value="26+"
                description="Лет помогаем Вам безопасно покупать, продавать, сдавать и арендовать недвижимость"
              />
              <StatisticBar
                value="38+"
                description="Городов и населенных пунктов, в которых мы уже помогли приобрести или продать недвижимость"
              />
              <StatisticBar
                value="12 000+"
                description="Сделок успешно провели специалисты компании, обеспечив безопасность и комфорт для клиентов"
              />
              <StatisticBar
                value="20 000+"
                description="Обращений ежегодно. Клиенты агентства получают постоянную поддержку по всем вопросам, связанным с недвижимостью"
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
        <Benefits />
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
