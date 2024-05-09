import React from 'react';

import EmployeeCard from '~entities/employee-card';
import Lottie from '~shared/lottie';
import cn from '~shared/utils/cn';

import teamAnimation from 'public/assets/team.json';

const cx = cn('team');
const data = {
  img: 'public/assets/dmitriy.jpg',
  name: 'Агламазов Дмитрий Витальевич',
  position: 'Риелтор',
};
const Team = () => {
  return (
    <div className={cx()}>
      <Lottie play speed={0.5} animationData={teamAnimation} className={cx('animation')} />
      <EmployeeCard {...data} />
    </div>
  );
};

export default Team;
