export const services = {
  ['Купить/Продать']: [
    {
      title: 'Квартира/Комната на вторичном рынке',
      price: 75000,
      content: {
        type: 'list',
        payload: [
          {
            type: 'Квартира/Комната в г. Москва',
            cost: '2% от стоимости объекта не менее 100 000 ₽',
          },
          {
            type: 'Квартира/Комната в МО',
            cost: '1.5% от стоимости объекта не менее 75 000 ₽',
          },
        ],
      },
    },
    {
      title: 'Загородная недвижимость',
      price: 75000,
      content: {
        type: 'text',
        payload: ['2% от стоимости объекта не менее 75 000 ₽'],
      },
    },
    {
      title: 'Комерческая недвижимость',
      price: 75000,
      content: {
        type: 'text',
        payload: ['2% от стоимости объекта не менее 75 000 ₽'],
      },
    },
    {
      title: 'Гараж, машино-место',
      price: 50000,
      content: {
        type: 'text',
        payload: ['2% от стоимости объекта не менее 75 000 ₽'],
      },
    },
  ],
  ['Снять']: [
    {
      title: 'Квартира/Комната',
      price: 'от 50%',
      content: {
        type: 'list',
        payload: [
          {
            type: 'Квартира/Комната в г. Москва',
            cost: 'от 70% от стоимости аренды (одноразовый платеж)',
          },
          {
            type: 'Квартира/Комната в МО',
            cost: 'от 50% от стоимости аренды (одноразовый платеж)',
          },
        ],
      },
    },
    {
      title: 'Комерческая недвижимость',
      price: 'от 50%',
      content: {
        type: 'text',
        payload: ['от 50% от стоимости аренды (одноразовый платеж)'],
      },
    },
  ],
  ['Сдать']: [
    {
      title: 'Квартира/Комната',
      price: 'Бесплатно',
      content: {
        type: 'list',
        payload: [
          {
            type: 'Квартира/Комната в г. Москва',
            cost: 'Бесплатно',
          },
          {
            type: 'Квартира/Комната в МО',
            cost: 'Бесплатно',
          },
        ],
      },
    },
    {
      title: 'Комерческая недвижимость',
      price: 'от 50%',
      content: {
        type: 'text',
        payload: ['от 50% от стоимости аренды (одноразовый платеж)'],
      },
    },
  ],
  ['Ипотека']: [
    {
      title: 'Покупаете недвижимость в нашей компании?',
      list: ['Консультация для вас бесплатно', 'Оформление ипотеки для вас бесплатно'],
    },
    {
      title: 'Интересует только ипотека?',
      list: [
        'Консультация для вас бесплатно',
        {
          text: 'Оформление ипотеки для вас - 30000 руб*',
          hint: '*в случае положительного решения банка (одобрения). В иных случаях - 0 рублей.',
        },
      ],
    },
  ],
  ['Дополнительно']: [
    {
      title: 'Сопровождение сделок',
      price: 25000,
      content: {
        type: 'list',
        payload: [
          {
            type: 'C объектами жилой недвижимости',
            cost: 'от 25 000 ₽',
          },
          {
            type: 'C объектами коммерческой недвижимости',
            cost: 'от 50 000 ₽',
          },
          {
            type: 'Cделки с земельными участками, домами, дачами, коттеджами, гаражами, машино-местами',
            cost: 'от 35 000 ₽',
          },
        ],
      },
    },
    {
      title: 'Оформление документов',
      price: 15000,
      content: {
        type: 'list',
        payload: [
          {
            type: 'Приватизации, наследства, предстоящего отчуждения (дарение, купли-продажи, обмена)',
            cost: 'от 15 000 ₽',
          },
          {
            type: 'Предстоящего отчуждения (дарение, купли-продажи, обмена) объектов жилой недвижимости',
            cost: 'от 30 000 ₽',
          },
        ],
      },
    },
    {
      title: 'Составление договоров в ППФ',
      price: 3500,
    },
  ],
};
