import React from 'react'
import List from './List'
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";


let lists = [
  {id: 1, owner_id: 1, name: 'Mom\'s Stuff', description: 'Items that belonged to Mom.', 
  items: 
    [{id: 1, name: 'Lamp', description: 'Ugly Lamp', picture: 'https://picsum.photos/100'}, 
    {id: 2, name: 'Bed', description: 'Iron Bed', picture: 'https://picsum.photos/100'},
    {id: 3, name: 'Dog', description: 'Slighty Used', picture: 'https://picsum.photos/100'}]
  },
  {id: 2, owner_id: 2, name: 'He Cheated...', description: '...I\'m getting even.',
  items: 
    [{id: 1, name: 'Watch', description: 'Ugly Watch', picture: 'https://picsum.photos/100'}, 
    {id: 2, name: 'Favorite Underwear', description: 'Slightly Used', picture: 'https://picsum.photos/100'},
    {id: 3, name: 'Laptop', description: 'Pretty Nice', picture: 'https://picsum.photos/100'}]
  },
  {id: 3, owner_id: 3, name: 'Moving Out', description: 'Anyone need/want anything?',
  items: 
    [{id: 1, name: 'Futon', description: 'It\'s a bed and a counch!', picture: 'https://picsum.photos/100'}, 
    {id: 2, name: 'Bed', description: 'Heavy Bed', picture: 'https://picsum.photos/100'},
    {id: 3, name: 'Lawn Dart Set', description: 'Slighty Dangerous', picture: 'https://picsum.photos/100'}]
  }
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
                  description={list.description} items={list.items}/>
            )
            })}
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default MyLists