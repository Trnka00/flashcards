import React, { useContext } from 'react';

import packageListCss from './PackageList.module.css';
import Package from './../Package/Package';
import { PackageContext } from './../../context/PackageContext';

const PackageList = () => {
  const { packages } = useContext(PackageContext);
  return (
    <div className={packageListCss.container}>
      {packages.map(pack => {
        return (
          <Package title={pack.title} size={pack.cards.length} id={pack.id} />
        );
      })}
    </div>
  );
};

export default PackageList;
