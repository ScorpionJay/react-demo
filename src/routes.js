import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from './containers/Index';
import App from './containers/App';
import Login from './containers/Login'
import NewsList from './containers/NewsList';
import NewsViewer from './containers/NewsViewer'

export default (
  	<Route path="/" component={App}>
	    <IndexRoute component={Index} />
	    <Route path="news" component={NewsList} />
	    <Route path="news/:id" component={NewsViewer} />
	    <Route path="login" component={Login} />
  	</Route>
)