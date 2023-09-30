import React, { Component } from 'react'
import axios from'axios'
class PostList extends Component { //get the data 
                                    //and print error message
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:[],
      }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            this.setState({ posts: response.data }); // Update the state with the fetched data
          })
          .catch((error) => {
            console.log(error);
            this.setState({error :'Retriving Data Error'})
          });
      }
  render() {
    const {posts ,error}=this.state
    return (
      <div>
        List Of posts{
            posts.length ? posts.map(post=> <div key={post.id}>{post.title}{post.body}  </div>) : null
           
        }
        { error ? <div>{error}</div>:null}
      </div>
    )
  }
}

export default PostList
