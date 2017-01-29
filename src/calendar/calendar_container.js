import React, { Component } from 'react';
import Calendar_date from './calendar_date';

class Calendar_container extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {loading: true}
  }


  
  

  render() {
      return (
        <div>
          <p>Calendar Screen</p>
          <Calendar_date />
      </div>
  )
    
    
    
  }
}

export default Calendar_container