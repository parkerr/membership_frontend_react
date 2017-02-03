import React, { Component } from 'react'

class MembersDetails extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {member: {...props.member}}
    this.onChangeFirstname = this.onChangeFirstname.bind(this)
    this.onChangeMiddlename = this.onChangeMiddlename.bind(this)
    this.onChangeLastname = this.onChangeLastname.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
  }

  onChangeFirstname(e) {
    this.props.onChangeFirstname(e.target.value)
  }

  onChangeMiddlename(e) {
    this.props.onChangeMiddlename(e.target.value)
  }
  
  onChangeLastname(e) {
    this.props.onChangeLastname(e.target.value)
  }

  onChangeGender(e) {
    this.props.onChangeGender(e.target.value)
  }    

  render() {      
    return (
      <form className="mui-form"> 
          <div className="mui-textfield mui-textfield--float-label">
            <input type="text" value={ this.state.member.firstname} onChange={ this.onChangeFirstname } required/>
            <label>Firstname:</label> 
          </div>
          <div className="mui-textfield mui-textfield--float-label">
            <input type="text" value={ this.state.member.middlename  } onChange={ this.onChangeMiddlename } required/>
            <label>Middlename:</label> 
          </div>
          <div className="mui-textfield mui-textfield--float-label">
            <input type="text" value={ this.state.member.lastname} onChange={ this.onChangeLastname } required/>
            <label>Lastname:</label> 
          </div>
          <div className="mui-select">
            <select value={ this.state.member.gender } onChange={ this.onChangeGender }>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <label>Gender</label>
           </div>
      </form>
    )
  }

}

export default MembersDetails