import React from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div>
          <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
