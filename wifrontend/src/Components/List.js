import React from 'react'
import { Link } from 'react-router-dom'

class List extends React.Component {
  constructor(props) {
    super(props)
  }

    render() {
      return (
          <div className='Item animated fadeIn'>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <Link to='/listview' className="button">View List</Link>
          </div>
      )
    }
  }
  
  export default List