import React, { Component } from 'react'
import axios from 'axios'
class DeleteData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:'101',
         
      }
    }
    
    deleteHandler = (e) => {
        e.preventDefault();
        const { id } = this.state;
        axios
          .delete(`https://jsonplaceholder.typicode.com/posts/1`)
          .then((response) => {
            console.log(`Data with ID ${id} has been deleted.`);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
  render() {
    return (
      <div>
        <form onSubmit={this.deleteHandler}>
          <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}

export default DeleteData
