import React from 'react';

function List() {
//   const arr = [1, 2, 3, 4, 5, 6];

// const mappedArray = arr.map((ele ,index) => {
//     return <div key={index}>{ele}</div>; //here index as key is not correct process in key value we can take id is best 
//                                             //when we suffele the array elements the indexes will change and it has not unique values thats why we can take is as key
//   });
const arr=[{id:1 ,name:'aaa'}, {id:2,name:'bbb'}]
  
const mappedArray = arr.map((ele ,id) => {
    return <div key={ele.id}>{ele.name}</div>; //here index as key is not correct process in key value we can take id is best 
                                            //when we suffele the array elements the indexes will change and it has not unique values thats why we can take is as key
  });

  return <div>{mappedArray}</div>;
}

export default List;

