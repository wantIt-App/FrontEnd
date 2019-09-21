import React from 'react'
import { FaHandPaper } from "react-icons/fa";
import { IconContext } from "react-icons";

class Item extends React.Component {
  constructor(props) {
    super(props)
  }
    render() {
      return (

          <div className='Item animated fadeIn GridContainer'>
            <a href='' className="">
              <div className='GridRow'>
                <img src={this.props.img} />
                <div>
                  <h2>{this.props.name}</h2>
                  <p>{this.props.description}</p>
                </div>
                <div className="Want">
                  <IconContext.Provider value={{  }}>
                    
                      <FaHandPaper />
                    
                  </IconContext.Provider> 
                  <p>{this.props.wants} Would Like</p>
                </div>      
              </div>
              
            </a>
          </div>
      )
    }
  }
  
  export default Item