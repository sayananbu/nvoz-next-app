import React from 'react';

import cn from '~shared/utils/cn';

const cx = cn('map');

const Map = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} className={cx()}>
      <a
        href="https://yandex.ru/maps/org/1_ya_rieltorskaya_kompaniya_novoye_vremya/221678720328/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
      >
        1-я риэлторская компания Новое время
      </a>
      <a
        href="https://yandex.ru/maps/10745/orehovo-zuevo/category/real_estate_agency/184107503/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
      >
        Агентство недвижимости в Орехово‑Зуево
      </a>
      <a
        href="https://yandex.ru/maps/10745/orehovo-zuevo/category/apartments_in_new_buildings/184107519/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}
      >
        Квартиры в новостройках в Орехово‑Зуево
      </a>
      <iframe
        title="map"
        src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=38.977003%2C55.804305&mode=search&oid=221678720328&ol=biz&z=17.71"
        width="560"
        height="400"
        allowFullScreen={true}
        style={{ position: 'relative' }}
      />
    </div>
  );
};

export default Map;
