import React, { Component } from 'react'
import axios from'axios'
class PostData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:'',
         title:'',
         body:'',
      }
    }
    
    changeHandler=(e)=>
    {
        this.setState({[e.target.name] :e.target.value})
    }
    submitHandler=(e)=>{
            e.preventDefault();
            console.log(this.state);
            axios.post('https://jsonplaceholder.typicode.com/posts' ,this.state)
            .then(responce=>{
                console.log(responce)
            })
            .catch(error=>{
                console.log(error)
            })
    }
  render() {
    const{id,title,body}=this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <label>Id :</label>
            <input type='text' name='id' value={id} onChange={this.changeHandler}></input><br></br>
            <label>Title :</label>
            <input type='text' name='title' value={title} onChange={this.changeHandler}></input><br></br>
            <label>Body :</label>
            <input type='text' name='body' value={body} onChange={this.changeHandler}></input><br></br>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostData
