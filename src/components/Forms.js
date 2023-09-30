import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
      }
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state.name)
    }
    changeHandler = (event) => {
        this.setState({ name: event.target.value });
      };
    
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <label>Name</label>
        <input type='text' name='name' value={this.state.name}  onChange={this.handleInputChange}></input>
        <button type='submit'>submit</button>
        </form>

      </div>
    )
  }
}

export default Forms
