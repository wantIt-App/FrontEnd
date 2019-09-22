import React from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom';
class Login extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
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
        <div className='login animated fadeIn'>
        <Link to='/lists' className='button'>My Lists</Link>
        <button className="button" onClick={this.handleOpenModal}>Login / Sign Up</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="Modal"
           overlayClassName="Overlay animated fadeIn"
        >
          <button onClick={this.handleCloseModal} className="button">X</button>
          <p>Name:</p> <textarea />
          <p>Email:</p> <textarea />
          <p>Password:</p> <textarea />
          <button className="button">Login</button>
          <button className="button">Sign Up</button>
        </ReactModal>
        </div>
      )
    }
  }
  
  export default Login