import React from 'react'
import Item from './Item'

class ListView extends React.Component {
    render() {
      return (
        <div className='List'>
          <h1>List Name</h1>
          <button>Add Item</button>

          <div className='ListItems'>
           <Item />
          </div>
        </div>
      )
    }
  }
  
  export default ListView