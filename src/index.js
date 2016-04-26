import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';


import { Router, browserHistory } from 'react-router'
//import routes from './routes'
import { Route, IndexRoute } from 'react-router'
import Index from './containers/Index';
import App from './containers/App';
import Login from './containers/Login'
import NewsList from './containers/NewsList';
import NewsViewer from './containers/NewsViewer'

const store = configureStore();

render(
  <Provider store={store}>
 	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="news" component={NewsList} />
			<Route path="news/:id" component={NewsViewer} />
			<Route path="login" component={Login} />
		</Route>
	</Router>
  </Provider>,
  document.getElementById('app')
);