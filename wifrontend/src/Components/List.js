import React from 'react'

class List extends React.Component {
  constructor(props) {
    super(props)
  }

    render() {
      return (
          <div className='Item animated fadeIn'>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <button>Join List</button>
          </div>
      )
    }
  }
  
  export default List