import React, { FC } from 'react';
import Image from 'next/image';
import cn from '~shared/utils/cn';
import { Employee } from '../model/types';
import { Text } from '@gravity-ui/uikit';

const cx = cn('employee-card');

const EmployeeCard: FC<Employee> = (props) => {
  const { img, name, bio, experience } = props;
  return (
    <div className={cx()}>
      <div className={cx('photo')}>
        <Image src={img} alt="Фото сотрудника" fill sizes="100%" objectFit="cover" />
      </div>
      <div className={cx('info')}>
        <div className={cx('experience')}>
          <Text variant="header-2">{experience}+ лет опыта</Text>{' '}
        </div>
        <Text variant="header-2">{name}</Text>
        <div className={cx('gap')}></div>
        <Text variant="body-3" className={cx('bio')}>
          {bio}
        </Text>
      </div>
    </div>
  );
};

export default EmployeeCard;
