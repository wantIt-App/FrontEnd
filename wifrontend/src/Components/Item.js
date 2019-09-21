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
            <div className='GridRow'>
              <img src={this.props.img} />

              <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
              </div>
              <a href='' className="Want">
              <IconContext.Provider value={{ reverseColor: "#fff", color: "#6495ed", className: "global-class-name" }}>
                <div>
                  <FaHandPaper /> <p>{this.props.wants}</p>
                </div>
              </IconContext.Provider>
              </a>
            </div>
          </div>
      )
    }
  }
  
  export default Item