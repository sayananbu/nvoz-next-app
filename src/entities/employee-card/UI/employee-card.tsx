import React, { FC } from 'react';

import Image from 'next/image';

import Text from '~shared/text';
import cn from '~shared/utils/cn';

import { Employee } from '../model/types';

const cx = cn('employee-card');

const EmployeeCard: FC<Employee> = (props) => {
  const { img, name: fullName, bio, experience } = props;
  const [surname, name, fathername] = fullName.split(' ');

  return (
    <div className={cx()}>
      <div className={cx('photo')}>
        <Image src={img} alt="Фото сотрудника" fill sizes="100%" objectFit="cover" />
      </div>
      <div className={cx('info')}>
        <div className={cx('experience')}>
          <Text size="2xl" weight="bold">
            {experience}+ лет опыта
          </Text>
        </div>
        <Text tag="p" size="3xl" className={cx('name')}>
          {surname + ' ' + name + ' '} <br className={cx('name-separator')} />
          {fathername}
        </Text>
        <div className={cx('gap')}></div>
        <Text className={cx('bio')}>{bio}</Text>
      </div>
    </div>
  );
};

export default EmployeeCard;
