import React, { Component } from 'react';
import { Link } from 'react-router'
//import request from 'superagent'

const HEADER_HEIGHT = 55


class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {}
    this.showInternalLink = this.showInternalLink.bind(this)
    this.embedExternalLink = this.embedExternalLink.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  componentWillMount() {
    if (global.window) {
      global.window.addEventListener('resize', this.onResize)
      this.onResize()
    }
  }

  componentWillUnmount() {
    if (global.window) {
      global.window.removeEventListener('resize', this.onResize)
    }
  }

  onResize() {
    this.setState({...this.state, bodyHeight: global.window.document.body.offsetHeight - HEADER_HEIGHT})
  }


  showInternalLink() {
    this.setState({...this.state, iframeLink: undefined})
  }

  embedExternalLink(e) {
    e.preventDefault()
    this.setState({...this.state, iframeLink: e.target.href})
    return false
  }

  render() {
    return (
      <div id="wrapper">
		{ this.renderHeader() }
        { this.renderNavigation() }
        { this.renderBody() }
      </div>
    );
  }

  renderHeader() {
	  return (
	  <header id="header">
		<div className="mui-appbar mui--appbar-line-height">
			<div className="mui-container-fluid">
			<a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
			<a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
			<span className="mui--text-title">Booker.io</span>
			</div>
		</div>
	  </header>
	  )
  }
  
  renderNavigation() {

      return (
<div id="sidedrawer" className="mui--no-user-select hide-sidedrawer">
	<div id="sidedrawer-brand" className="mui--appbar-line-height">
			<span className="mui--text-title">Booker.io</span>
		</div>
		<div className="mui-divider"></div>
		<ul>
			<li>
				<strong>Admin</strong>
				<ul>
					<li><Link to="/" onClick={ this.showInternalLink }>Home</Link></li>
					<li><Link to="/members" activeClassName="active" onClick={ this.showInternalLink }>Members</Link></li>

				</ul>
			</li>
			<li>
				<strong>Main</strong>
				<ul>
				<li><a href="#">Item 1</a></li>
				<li><a href="#">Item 2</a></li>
				<li><a href="#">Item 3</a></li>
				</ul>
			</li>
  
		</ul>
	 </div> 


      )

  }

  renderBody() {

      return (
		<div id="content-wrapper">
            <div className="mui--appbar-height"></div>
			<div className="mui-container-fluid">
			<br></br>
                { this.props.children }
			</div>	
        </div>
		)
    
  }

}

export default App;
