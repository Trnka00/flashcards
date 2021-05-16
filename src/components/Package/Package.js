import React from 'react';
import { Link } from 'react-router-dom';

import packageCss from './Package.module.css';
import trainIcon from './../../img/train.svg';
import editIcon from './../../img/edit.svg';

const Package = ({ title, size, id }) => {
  return (
    <div className={packageCss.container}>
      <div className={packageCss.info}>
        <h2 className={packageCss.heading}>{title}</h2>
        <p>{`${size} cards`}</p>
      </div>
      <div className={packageCss.buttons}>
        <Link to={`/edit/${id}`}>
          <img src={editIcon} alt='edit icon' />
        </Link>
        <Link to={`/practice/${id}`}>
          <img src={trainIcon} alt='train icon' />
        </Link>
      </div>
    </div>
  );
};

export default Package;
