import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Products } from './components/views/Products/Products';
import { Drugs } from './components/views/Drugs/Drugs';
import { NotFound } from './components/views/NotFound/NotFound';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { OrderSummary } from './components/views/OrderSummary/OrderSummary';
import background from './components/images/55.jpg';
import Swal from 'sweetalert2';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});


Swal.fire({
  title: 'MyDrugs',
  font: 'Press Start 2P',
  text: 'Hello everyone, Adrian here and this is a Kodilla bootcamp project... enjoy ; )',
  imageUrl: 'https://i.postimg.cc/ZKk4BbZm/morpheusredblue.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  background: '	#FFFFFF',
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
});


const App = () => (
  <div className="background"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/products/:id' component={Products} />
                <Route exact path='/drug/:id' component={ Drugs } />
                <Route exact paht='/order' component={ OrderSummary } />
                <Route path='*' component={NotFound} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  </div>
);

export { App };
