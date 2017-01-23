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
        { this.renderNavigation() }
        { this.renderBody() }
      </div>
    );
  }

  renderNavigation() {

      return (

        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
				<li className="sidebar-brand">
                    <a href="#">
                        Membership
                    </a>
                </li>
                <li><Link to="/" onClick={ this.showInternalLink }>Home</Link></li>
                <li><Link to="/members" activeClassName="active" onClick={ this.showInternalLink }>Members</Link></li>
            </ul>
        </div>

      )

  }

  renderBody() {
      if (this.state.iframeLink) {
        return (
          <div id="page-content-wrapper">
            <div className="container-fluid">
            <iframe src={ this.state.iframeLink } style={{height: this.state.bodyHeight, border: 0}} seamless frameBorder="0"></iframe>
			</div>
          </div>
        )
      }
      return (
		<div id="page-content-wrapper">
		<a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
            <div className="container-fluid">
                { this.props.children }
            </div>
        </div>
		)
    
  }

}

export default App;
