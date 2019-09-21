import React from 'react'
import Item from './Item'

class ListView extends React.Component {
    render() {
      return (
        <div className='List animated fadeIn'>
          <h1>List Name</h1>
          <button>Add Item</button>

          <div className='ListItems animated fadeIn delay-.25s'>
           <Item />
          </div>
        </div>
      )
    }
  }
  
  export default ListView