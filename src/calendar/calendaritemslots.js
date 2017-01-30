import React, { Component } from 'react';




class CalendarTimeslots extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {loading: true}
  }


  renderTimeSliceGroup(key, y, timeDisplay, fill) {
    return (
		<g key={key}>
		<rect key={key} width={100} y={y} height={this.props.height} fill={fill} stroke={'#000'} strokeWidth={1}/>
		<text x="70" y={y + 15} fontFamily="Verdana" fontSize="8" fill="black" >{timeDisplay}</text>
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
	
	  // Add the padder
	if(this.props.padder > 0){
		 renderedSlots.push(this.renderTimeSliceGroup(1, this.props.padder, "", '#000'))
	}
	
	// This is the startime
	date.setHours(this.props.starthour)
	date.setMinutes(this.props.startminute)

	
	for (var i = 2; i <= 30; i++) {

	renderedSlots.push(this.renderTimeSliceGroup(i, h, (this.addZero(date.getHours().toString()) + this.addZero(date.getMinutes().toString())), "#fff"))
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