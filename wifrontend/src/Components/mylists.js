import React from 'react'
import List from './List'
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";


let lists = [
  {name: "Mom's Stuff",
   description: 'Items that belonged to Mom.',
   items: [],
   id: 1},
   {name: 'Moving Out',
   description: 'Anyone need/want anything?',
   id: 2},
   {name: 'He cheated...',
   description: "...I'm getting even.",
   id: 3},
]

class MyLists extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lists: lists }
  }
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
              {this.state.lists.map(list => {
                return (
                  <List key={list.id} name={list.name}
                  description={list.description} />
            )
            })}
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default MyLists