import React, { Component } from 'react';
import CalendarDate from './calendardate';
import CalendarTimebar from './calendartimebar';

class CalendarContainer extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {loading: true}
  }


  
  

  render() {
      return (
        <div className="mui-container-fluid">
          <p>Calendar Screen</p>
          <CalendarDate />
          <div className="mui-panel">
		  <div className="row">
          <CalendarTimebar height={60} padder={0}/>
          <CalendarTimebar height={40} padder={20}/>
          <CalendarTimebar height={40} padder={0}/>
          <CalendarTimebar height={40} padder={10}/>
          <CalendarTimebar height={40} padder={20}/>
          <CalendarTimebar height={40} padder={0}/>
		  </div>
          </div>
      </div>
  )
    
    
    
  }
}

export default CalendarContainer