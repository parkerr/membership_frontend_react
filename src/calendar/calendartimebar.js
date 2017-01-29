import React, { Component } from 'react';
import {Rectangle} from 'react-shapes';



class CalendarTimebar extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {loading: true}
  }


  
  

  render() {
      return (
        <div className="mui-container-fluid mui-col-md-2 mui-col-xs-1">
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
          <Rectangle width={100} height={this.props.height} fill={{color:'#4286f4'}} stroke={{color:'#000'}} strokeWidth={1} />
        </div>
  )
    
    
    
  }
}

export default CalendarTimebar