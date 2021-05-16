import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import PackageList from './components/PackageList/PackageList';
import Practice from './components/Practice';
import Edit from './components/Edit';

import DeleteModal from './components/DeleteModal';
import PackageContextProvider from './context/PackageContext';
import Help from './components/Help/Help';
import Add from './components/Add/Add';

const App = () => {
  return (
    <PackageContextProvider>
      <Router>
        <div className='app'>
          <Header />
          <Switch>
            <Route path='/help' exact component={Help} />
            <Route path='/Add' exact component={Add} />
            <Route path='/' exact component={PackageList} />
            <Route path='/practice/:id' exact component={Practice} />
            <Route path='/edit/:id' exact component={Edit} />
            <Route path='/delete/:id' exact component={DeleteModal} />
          </Switch>
        </div>
      </Router>
    </PackageContextProvider>
  );
};

export default App;
