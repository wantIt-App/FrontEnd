import React from 'react'
import { FaHandPaper } from "react-icons/fa";
import { IconContext } from "react-icons";
class Item extends React.Component {
    render() {
      return (
          <div className='Item animated fadeIn'>
            <div className='flex'>
              <img src="https://picsum.photos/100" />
              <div>
                <h2>Item Name</h2>
                <p>Description</p>
              </div>
              <a href=''>
              <IconContext.Provider value={{ reverseColor: "#fff", color: "#6495ed", className: "global-class-name" }}>
                <div>
                  <FaHandPaper />
                </div>
              </IconContext.Provider>
              </a>
            </div>
          </div>
      )
    }
  }
  
  export default Item