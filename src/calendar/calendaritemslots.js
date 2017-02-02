import React, { Component } from 'react';




class CalendarTimeslots extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {loading: true}
  }


  renderTimeSliceGroup(key, height, timeDisplay, fill) {
    return (
        
        <div key={key} style={{"height":height}}>
        <div style={{"height": "100%","border": "1px solid #E0E0E0"}}>
        <p className="mui--text-dark-secondary small-font no-padding">{timeDisplay}</p> 
        </div> 
        </div>
	)
  }
  renderPadder(key, height, fill) {
    return (
        
        <div key={key} style={{"height":height}}>
        <div style={{"height": "100%","background":"#2196F3"}}>
        </div> 
        </div>
	)
  }
  
  addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

  render() {
	const renderedSlots = []
	  //padder is the start position
	let h = this.props.padder
      if(h > 0){
         renderedSlots.push(this.renderPadder(1, h, "#fff"))
      }
      
      
	var date = new Date()
	
	
	// This is the startime
	date.setHours(this.props.starthour)
	date.setMinutes(this.props.startminute)

	
	for (var i = 2; i <= 100; i++) {

	renderedSlots.push(this.renderTimeSliceGroup(i, this.props.interval, (this.addZero(date.getHours().toString()) + ':' + this.addZero(date.getMinutes().toString())), "#fff"))
	  	h = h + this.props.interval
		date.setMinutes(date.getMinutes() + this.props.interval)
	
	if (date.getHours() > 20) { break; }
		
	}
	    
    return (
        <div  className="mui-col-md-2 mui-col-xs-2 no-padding">

				{renderedSlots}

		</div>
	)
    
  }
}

export default CalendarTimeslots