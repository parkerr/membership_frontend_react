import React, { Component } from 'react';
import CalendarDate from './calendardate';
import CalendarTimebar from './calendartimebar';
import CalendarItemslots from './calendaritemslots';

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
          <CalendarItemslots height={40} padder={20} interval={40} starttime={920} starthour={9} startminute={20}/>
          <CalendarItemslots height={40} padder={0} interval={40} starttime={900} starthour={9} startminute={0}/>
          <CalendarItemslots height={40} padder={10} interval={40} starttime={910} starthour={9} startminute={10}/>
          <CalendarItemslots height={40} padder={20} interval={40} starttime={920} starthour={9} startminute={20}/>
          <CalendarItemslots height={40} padder={0} interval={30} starttime={900} starthour={9} startminute={0}/>
		  </div>
          </div>
      </div>
  )
    
    
    
  }
}

export default CalendarContainer