import React from 'react'
import { Link } from 'react-router-dom'

class List extends React.Component {
  constructor(props) {
    super(props)
  }

    render() {
      return (
          <div className='Item animated fadeIn GridContainer'>
            <div className='GridRow GridRow--two-column'>
              <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
              </div>
              <div class="view-button">
                <Link to={{pathname: '/listview',
                state: {
                  name: this.props.name
                }}} className="button">View List</Link>
              </div>
            </div>
          </div>
      )
    }
  }
  
  export default List