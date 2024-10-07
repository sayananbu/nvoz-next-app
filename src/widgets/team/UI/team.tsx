import React from 'react';

import EmployeeCard from '~entities/employee-card';
import cn from '~shared/utils/cn';

import { teamData } from '../model/team-data';

const cx = cn('team');

const Team = () => {
  return (
    <div className={cx()}>
      {teamData.map((memberData) => (
        <EmployeeCard key={memberData.name} {...memberData} />
      ))}
    </div>
  );
};

export default Team;
