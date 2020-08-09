import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppWrapper } from './containers/main-page-container';
import MainPage from './pages/main/main-page';
import AboutPage from './pages/about/about-page';

function App() {
  return (
    <AppWrapper className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
