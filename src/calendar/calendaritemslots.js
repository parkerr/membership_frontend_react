import React, { Component } from 'react';




class CalendarTimeslots extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {loading: true}
  }


  renderTimeSliceGroup(key, y, timeDisplay, fill) {
    return (
		<g key={key}>
		<rect key={key} width={100} y={y} height={this.props.height} fill={fill} stroke={'#E0E0E0'} strokeWidth={1}/>
		<text x="1" y={y + 8} fontFamily="Verdana" fontSize="6" fill="#707070" >{timeDisplay}</text>
		</g>
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
	var date = new Date()
	
	
	// This is the startime
	date.setHours(this.props.starthour)
	date.setMinutes(this.props.startminute)

	
	for (var i = 2; i <= 100; i++) {

	renderedSlots.push(this.renderTimeSliceGroup(i, (h + 1), (this.addZero(date.getHours().toString()) + ':' + this.addZero(date.getMinutes().toString())), "#fff"))
	  	h = h + this.props.interval
		date.setMinutes(date.getMinutes() + this.props.interval)
	
	if (date.getHours() > 20) { break; }
		
	}
	    
    return (
        <div  className="mui-col-md-2 mui-col-xs-2 no-padding">
			<svg viewBox="0 0 100 750">
				{renderedSlots}
			</svg> 
		</div>
	)
    
  }
}

export default CalendarTimeslots