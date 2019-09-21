import React from 'react'
import List from './List'

class MyLists extends React.Component {
    render() {
      return (
        <div className='MyLists'>
          <h1>My Lists</h1>
          <textarea />
          <button>Search Lists</button>

          <div className='ListGroup'>
           <List />
          </div>
        </div>
      )
    }
  }
  
  export default MyLists