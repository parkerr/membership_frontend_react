import React, { Component } from 'react';

class Calendar_date extends Component {

  constructor(props, context) {
    super(props, context)
    var date1 = new Date()
    date1.setHours(0,0,0,0) 
    this.state = {loading: true, date: date1}
    this.moveback = this.moveback.bind(this)
    this.moveforward = this.moveforward.bind(this)
  }

  moveback(){
    var date1 = this.state.date
    date1.setDate(date1.getDate()-1) 
    date1.setHours(0,0,0,0)
    this.setState({...this.state, date: date1 })
  }

  moveforward(){
    var date1 = this.state.date
    date1.setDate(date1.getDate()+1)
    date1.setHours(0,0,0,0)
    this.setState({...this.state, date: date1 })
  }
  
  

  render() {
    return (
      <div className="container">
        <div className="row"><button type="button" className="mui-btn mui-btn--primary mui-btn--small" onClick={ this.moveback } ><i className="material-icons md-18 vertical-align-middle padding-bottom-3">chevron_left</i></button> {this.state.date.toDateString() } <button className="mui-btn mui-btn--primary mui-btn--small" onClick={ this.moveforward} ><i className="material-icons md-18 vertical-align-middle padding-bottom-3">chevron_right</i></button></div>
      </div>
    )
  }
}

export default Calendar_date