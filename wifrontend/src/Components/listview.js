import React from 'react'
import Item from './Item'

let items = [
  {name: 'Lamp',
   description: 'ugly lamp',
   wants: [],
   img: 'https://picsum.photos/100',
   id: 1},
   {name: 'Bed',
   description: 'iron bed',
   wants: ['Abi'],
   img: 'https://picsum.photos/100',
   id: 2},
   {name: 'Dog',
   description: 'Slightly Used',
   wants: [],
   img: 'https://picsum.photos/100',
   id: 3},
]

class ListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: items }
  }

    render() {
      return (
        <div className='List animated fadeIn'>
          <h1>List Name</h1>
          <button>Add Item</button>

          <div className='ListItems animated fadeIn delay-.25s'>
            {this.state.items.map(item => {
    
            return (
              <Item key={item.id} name={item.name}
              description={item.description} img={item.img}
              wants={item.wants} />
    )
})}
          </div>
        </div>
      )
    }
  }
  
  export default ListView