import React from 'react'
import { FaHandPaper } from "react-icons/fa";
import { IconContext } from "react-icons";
class Item extends React.Component {
    render() {
      return (
          <div className='Item animated fadeIn GridContainer'>
            <a href='' className='Selected'>
              <div className='GridRow'>
                <img src="https://picsum.photos/100" />
                <div>
                  <h2>Item Name</h2>
                  <p>Description</p>
                </div>
                <div className="Want">
                <IconContext.Provider value={{ }}>
                  <div>
                    <FaHandPaper />
                  </div>
                </IconContext.Provider>
                </div>
              </div>
            </a>
          </div>
      )
    }
  }
  
  export default Item