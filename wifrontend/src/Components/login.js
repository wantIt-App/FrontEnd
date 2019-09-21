import React from 'react'
import ReactModal from 'react-modal';
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
        <button onClick={this.handleOpenModal}>Login / Sign Up</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="Modal"
           overlayClassName="Overlay"
        >
          <button onClick={this.handleCloseModal}>X</button>
          <p>Name:</p> <textarea />
          <p>Email:</p> <textarea />
          <p>Password:</p> <textarea />
          <button>Login</button>
          <button>Sign Up</button>
        </ReactModal>
        </div>
      )
    }
  }
  
  export default Login