import React, { Component } from 'react'
import axios from'axios'
class UpdateData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:'11',
        title:'Sai',
        body:'Updated Success',
      }
    }
    
    updateHandler = (e) => {
        e.preventDefault();
        const { id, title, body } = this.state;
        axios.put(`https://jsonplaceholder.typicode.com/posts/1`, { id, title, body })
          .then(response => {
            console.log(response);
            
          })
          .catch(error => {
            console.log(error);
          });
      }
  render() {
    return (
      <div>
       < form onSubmit={this.updateHandler}>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default UpdateData
