import React from 'react'
import Login from './Components/login'
import ListView from './Components/listview'
import MyLists from './Components/mylists'
import Logo from './logo.png'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { component: undefined }
  }

  displayLogin=()=>{
    this.setState({ component: 'Login' })
  }

  displayMyLists=()=>{
    this.setState({ component: 'MyLists' })
  }

  displayListView=()=>{
    this.setState({ component: 'ListView' })
  }

  render() {
    if (this.state.component == 'Login' || this.state.component == undefined) {
      return (
        <div className='constrain'>
          <img src={Logo} className='logo'/>
          <div className='menu'>
            <button onClick={this.displayLogin} className='active'>Login</button>
            <button onClick={this.displayMyLists}>My Lists</button>
            <button onClick={this.displayListView}>List View</button>
          </div>
          <div className='constrain__inner'>
            <Login/>
          </div>
        </div>
      )
    } else if (this.state.component == 'MyLists') {
      return (
        <div className='constrain'>
          <h2>Logo Placeholder</h2>
          <div className='menu'>
            <button onClick={this.displayLogin}>Login</button>
            <button onClick={this.displayMyLists} className='active'>My Lists</button>
            <button onClick={this.displayListView}>List View</button>
          </div>
          <div className='constrain__inner'>
            <MyLists/>
          </div>
        </div>
      )
    } else {
      return (
        <div className='constrain'>
          <h2>Logo Placeholder</h2>
          <div className='menu'>
            <button onClick={this.displayLogin}>Login</button>
            <button onClick={this.displayMyLists}>My Lists</button>
            <button onClick={this.displayListView} className='active'>List View</button>
          </div>
          <div className='constrain__inner'>
            <ListView/>
          </div>
        </div>
      )
    }
  }
}


export default App