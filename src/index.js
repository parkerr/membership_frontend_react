import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import Members from './user/members';


const NoMatch = (props) => {
  return <div>Page "{ props.routeParams.splat }" Not found</div>
}

const allTopLevelRoutes = {
  members: <Route key="members" path="members" component={ Members } />,
}

class AppRoutes extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      allowed_routes: [],
    }
  }

  componentWillMount() {
    // TODO ajax request to fetch allowed_routes.
    this.setState({allowed_routes: ['members']})
  }

  render() {
    // TODO pass allowed_routes to App component so that only relevant
    // links are rendered in navigation menu.
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          { this.renderRoutes() }
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    )
  }

  renderRoutes() {
    return this.state.allowed_routes.map(routeName => {
      return allTopLevelRoutes[routeName]
    })
  }

}

ReactDOM.render(
  <AppRoutes />,
  document.getElementById('root')
);

