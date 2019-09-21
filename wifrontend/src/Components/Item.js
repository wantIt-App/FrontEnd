import React from 'react'

class Item extends React.Component {
    render() {
      return (
          <div className='Item'>
            <h2>Item Name</h2>
            <img src="https://picsum.photos/100" />
            <p>Description</p>
            <button>Want It!</button>
          </div>
      )
    }
  }
  
  export default Item