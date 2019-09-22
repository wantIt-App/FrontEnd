import React from 'react'
import Item from './Item'
import ReactModal from 'react-modal';
import { API_URL } from './config'

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
    this.state = { 
      items: items,
      showModal: false,
      name: '',
      desc: '',
      img: '' }

  this.handleOpenModal = this.handleOpenModal.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);
  this.onChange = this.onChange.bind(this);
  this.onNameChange = this.onNameChange.bind(this);
  this.onDescChange = this.onDescChange.bind(this);
}

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  onChange = async (e) => {
    const errs = [] 
    const files = Array.from(document.getElementById('single').files)
    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`)
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`)
      }

      formData.append(i, file)
    })

    if (errs.length) {
      return errs.forEach(err => alert(err))
    }


    await fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(images => {
      this.setState({ img: images[0].url })
    })


    await console.log(this.state.img, this.state.name, this.state.desc)
  }

  onNameChange = e => {this.setState({ name: e.target.value })}
  onDescChange = e => {this.setState({ desc: e.target.value })}

    render() {
      return (
        <div className='List animated fadeIn'>
          <h1>{this.props.location.state.name}</h1>
          <button onClick={this.handleOpenModal} className="button">Add Item</button>
          <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal} className="button">X</button>
          <input type='file' id='single'/>
          Item Name: <textarea onChange={this.onNameChange}/>
          Description: <textarea onChange={this.onDescChange}/>
          <button className="button" onClick={this.onChange}>Add Item</button>
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