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
      <div className="mui-panel">
        <div className="mui-row">
          <table width="100%">
          <tbody>
            <tr style={{height:"50px"}}>
              <td width="20%" className="mui--align-middle mui--text-right">
                <button type="button" className="mui-col-md-1 mui-col-md-offset-3 mui-btn mui-btn--primary mui-btn--small" onClick={ this.moveback } >
                  <i className="material-icons md-18 vertical-align-middle padding-bottom-3">chevron_left</i>
                </button>
              </td>
              <td width="60%" className="mui--align-middle mui--text-center">
                {this.state.date.toDateString() }
              </td>
              <td width="20%" className="mui--align-middle mui--text-left">
                <button className="mui-col-md-1 mui-btn mui-btn--primary mui-btn--small" onClick={ this.moveforward} >
                  <i className="material-icons md-18 vertical-align-middle padding-bottom-3">chevron_right</i>
                </button>
              </td>
            </tr>     
          </tbody>
          </table>


          
          
        </div>
        <div className="mui-row">

        </div>
      </div>
    )
  }
}

export default Calendar_date