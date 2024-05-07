import React, { FC } from 'react';

import cn from '~shared/utils/cn';

const cx = cn('employee-card');

interface EmployeeCardProps {
  img: string;
  name: string;
  position: string;
}

const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  return <div className={cx()}>EmployeeCard</div>;
};

export default EmployeeCard;
