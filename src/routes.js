import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Menu from './pages/Menu';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}
