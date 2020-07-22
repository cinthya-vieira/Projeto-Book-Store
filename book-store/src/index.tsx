import React from 'react';
import ReactDOM from 'react-dom';
import Home from './view/pages/Home/Home';
import Carrinho from './view/pages/Carrinho/Carinho';
import NotFound from './view/pages/NotFound/NotFound';
import Livros from './view/pages/Livros/Livros';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/carrinho" component={Carrinho} />
      <Route path="/livros" component={Livros} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
, document.getElementById("root"));
