import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import App from './App';
import './bootstrap/css/bootstrap.css';
import './style.css';
import Members from './members/members';
import Setup from './setup/setup';
import CalendarContainer from './calendar/calendarcontainer'
import Diary_container from './diary/diary_container'
import Account_container from './account/account_container'

const NoMatch = (props) => {
  return <div>Page "{ props.routeParams.splat }" Not found</div>
}

const allTopLevelRoutes = {
  members: <Route key="members" path="members" component={ Members } />,
  setup: <Route key="setup" path="setup" component={ Setup } />,
  calendar: <Route key="calendar" path="calendar" component={ CalendarContainer } />,
  diary: <Route key="diary" path="diary" component={ Diary_container } />,
  account: <Route key="account" path="account" component={ Account_container } />
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
    this.setState({allowed_routes: ['members','setup','calendar','diary','account']})
  }

  render() {
    // TODO pass allowed_routes to App component so that only relevant
    // links are rendered in navigation menu.
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          { this.renderRoutes() }
          <IndexRoute component={ Members }/>
          <Route path="*" component={ Members}/>
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

