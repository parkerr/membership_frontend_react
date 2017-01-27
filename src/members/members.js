import React, { Component } from 'react';
import { members } from '../sampledata';
import house from '../img/house.jpg'

class Members extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {members: [], loading: true}
  }

  componentWillMount() {

      setTimeout(() => {
        this.setState({...this.state, loading: false, members: members.members})
      }, 500)
  }
  
  

  render() {
      return (
        <div>
          <div className="mui-content-wrapper">
    <div className="mui-row">
      { this.state.members.map(member => {
        return (
          <div key={ member.memberID } className="mui-col-md-4">
            <div className="mui-panel mui-panel-default">
              <div className="mui-panel-heading">
                <a href="#" className="mui-pull-right mui-text-muted"><em className="fa"></em></a>
              </div>
              <div className="mui-panel-body mui-text-center">
                <img src={ house } alt="Contact" className="mui-center-block circle thumb64"/>
                <h4>{ member.memberName }</h4>
                <p>Email:{ member.memberEmail}</p>
              </div>
              <div className="mui-panel-footer mui-clearfix">
             
              </div>
            </div>
          </div>
        )
      }) }
      </div>
      </div>
      </div>
  )
    
    
    
  }
}

export default Members
