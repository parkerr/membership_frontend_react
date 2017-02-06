import React, { Component } from 'react';

class CalendarTimebar extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {loading: true}
  }


  renderTimeSliceGroup(key, y, timeDisplay) {
    
    return (
        <div key={key} style={{"height":this.props.height}}>
        <div style={{"height": "100%","border": "1px solid #E0E0E0","background":"#2196F3"}}>
        <p className="mui--text-light-secondary small-font-bold">{timeDisplay}</p> 
        </div>   
        </div>
    )
  }
  

  render() {
	  const renderedSlots = []
	  //padder is the start position
	  let h = this.props.padder
	  for (var i = 900; i <= 2000; i=i+100) {
      renderedSlots.push(this.renderTimeSliceGroup(i, this.props.height, i))

    }
	    
      return (
        <div  className="mui-col-md-1 mui-col-xs-1 mui-col-lg-1 no-padding">

		{renderedSlots}

	 </div>
  )
    
    
    
  }
}

export default CalendarTimebar