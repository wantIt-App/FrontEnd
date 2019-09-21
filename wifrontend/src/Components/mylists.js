import React from 'react'
import List from './List'
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

class MyLists extends React.Component {
    render() {
      return (
        <div className='MyLists'>
          <div className='animated fadeIn'>
            <h1>My Lists</h1>
            <div className='SearchBox'> 
              <input />
              <a href='' className='SearchButton'>
              <IconContext.Provider value={{ color: "#6495ed", className: "global-class-name" }}>
                <div>
                  <FaSearch />
                </div>
              </IconContext.Provider>
              </a>  
            </div>
            <div className='ListGroup'>
              <List />
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default MyLists