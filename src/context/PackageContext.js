import React, { useState, useEffect, createContext } from 'react';
import { v1 as uuid } from 'uuid';

export const PackageContext = createContext();

const PackageContextProvider = props => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const localPackages = JSON.parse(localStorage.getItem('flashcardMaster'));
    if (!localPackages) {
      setPackages([
        {
          title: 'Your first package',
          cards: [
            { front: 'dog', back: 'animal' },
            { front: 'Computer', back: 'machine' },
            { front: 'spain', back: 'country' },
          ],
          id: uuid(),
        },
      ]);
    } else {
      setPackages(localPackages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('flashcardMaster', JSON.stringify(packages));
  }, [packages]);

  return (
    <PackageContext.Provider value={{ packages }}>
      {props.children}
    </PackageContext.Provider>
  );
};
export default PackageContextProvider;
