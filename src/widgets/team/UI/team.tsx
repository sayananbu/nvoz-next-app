import React from 'react';

import EmployeeCard from '~entities/employee-card';
import cn from '~shared/utils/cn';

const cx = cn('team');

const Team = () => {
  return (
    <div className={cx()}>
      <EmployeeCard />
    </div>
  );
};

export default Team;
