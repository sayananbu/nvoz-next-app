import React from 'react';

import EmployeeCard, { Employee } from '~entities/employee-card';
import Lottie from '~shared/lottie';
import cn from '~shared/utils/cn';

import teamAnimation from 'public/assets/team.json';

const cx = cn('team');
const data: Employee = {
  img: '/assets/dmitriy.jpg',
  name: 'Агламазов Дмитрий Витальевич',
  bio: 'Риелтор, cпециалист по продаже и аренде недвижимости, в том числе загородной, имеющий более чем 10-летний опыт управления по сделкам купли-продажи',
  experience: 12,
};
const data2: Employee = {
  img: '/assets/evgenia.jpg',
  name: 'Агламазов Евгения Витальевич',
  bio: `Специалист по продаже и аренде недвижимости, в том числе и загородной, имеющий 10-летний опыт управления по сделкам купли-продажи.
Большой опыт работы с клиентами и умение находить их индивидуальные потребности.
`,
  experience: 10,
};
const data3: Employee = {
  img: '/assets/lyuda.jpg',
  name: 'Пчелинцева Людмила Михайловна',
  bio: `Директор компании, риелтор, cпециалист по продаже и аренде недвижимости, в том числе и загородной, имеющий 10-летний опыт управления по сделкам купли-продажи.
Большой опыт работы с клиентами и умение находить их индивидуальные потребности.
`,
  experience: 25,
};
const Team = () => {
  return (
    <div className={cx()}>
      <EmployeeCard {...data3} />
      <EmployeeCard {...data} />
      <EmployeeCard {...data2} />
      {/* <Lottie play speed={0.5} animationData={teamAnimation} className={cx('animation')} /> */}
    </div>
  );
};

export default Team;
