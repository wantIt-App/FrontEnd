import React from 'react'
import Item from './Item'
import ReactModal from 'react-modal';

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
    this.state = { items: items,
      showModal: false }

  this.handleOpenModal = this.handleOpenModal.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);
}

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

    render() {
      return (
        <div className='List animated fadeIn'>
          <h1>List Name</h1>
          <button onClick={this.handleOpenModal}>Add Item</button>
          <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>X</button>
          <h1>Upload form Here</h1>
          <button>Add Item</button>
        </ReactModal>

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