import React, { FC } from 'react';

import cn from '~shared/utils/cn';

const cx = cn('map');
interface MapProps {
  className?: string;
}
const Map: FC<MapProps> = (props) => {
  const { className } = props;

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} className={cx('', className)}>
      <iframe
        title="ymaps"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb1dc0b2621c5778e777423f58bb1baba96dc40db2eaf5b8ae56c1117de89910&amp;source=constructor&amp;scroll=false"
        width="615"
        height="440"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Map;
