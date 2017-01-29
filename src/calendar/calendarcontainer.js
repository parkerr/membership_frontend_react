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
          <CalendarTimebar height={60}/>
          <CalendarTimebar height={40}/>
          <CalendarTimebar height={40}/>
          <CalendarTimebar height={40}/>
          <CalendarTimebar height={40}/>
          <CalendarTimebar height={40}/>
          </div>
      </div>
  )
    
    
    
  }
}

export default CalendarContainer