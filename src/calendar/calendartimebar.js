import React, { Component } from 'react';
import {Rectangle} from 'react-shapes';



class CalendarTimebar extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {loading: true}
  }


  renderTimeSliceGroup(key, y, timeDisplay) {
    
    return (
	
		<g key={key}>
		<rect key={key} width={100} y={y} height={this.props.height} fill={'#fff'} stroke={'#000'} strokeWidth={1}/>
		<text x="70" y={y + 15} fontFamily="Verdana" fontSize="8" fill="black" >{timeDisplay}</text>
		</g>
    )
  }
  

  render() {
	  const renderedSlots = []
	  let h = this.props.padder
	  for (var i = 900; i <= 2000; i=i+100) {
      renderedSlots.push(this.renderTimeSliceGroup(i, h, i))
	  		h = h + this.props.height
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

export default CalendarTimebar