import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList'
import PostDAta, { PostData } from './components/PostData'
import UpdateData from './components/UpdateData'
import DeleteData from './components/DeleteData'
import ParentPropType from'./components/ParentPropType'
import List from'./components/List'
import Forms from'./components/Forms'
function App() {
  return (
    <div className="App">
      <header className="App-header">
{/* <PostList></PostList> */}
      {/* <PostData></PostData> */}
      {/* <UpdateData></UpdateData> */}
       {/* <DeleteData></DeleteData> */}
       {/* <ParentPropType></ParentPropType> */}
       {/* <List></List> */}
       <Forms></Forms>
      </header>
    </div>
  );
}

export default App;
