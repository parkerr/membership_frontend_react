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
      <div className="app wrapper">
        { this.renderNavigation() }
        { this.renderBody() }
      </div>
    );
  }

  renderNavigation() {






      return (
          
          
<nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Brand</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                <li><Link to="/" onClick={ this.showInternalLink }>Home</Link></li>
                <li><Link to="/members" activeClassName="active" onClick={ this.showInternalLink }>Members</Link></li>
      </ul>
    </div>
  </div>
</nav>
          



      )

  }

  renderBody() {
      if (this.state.iframeLink) {
        return (
          <section className="app__content main-content">
            <iframe src={ this.state.iframeLink } style={{height: this.state.bodyHeight, border: 0}} seamless frameBorder="0"></iframe>
          </section>
        )
      }
      return (
        <section className="app__content main-content" style={{minHeight: this.state.bodyHeight}}>
          { this.props.children }
        </section>
      )
    
  }

}

export default App;
