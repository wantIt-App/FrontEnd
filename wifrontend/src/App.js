import React from 'react'
import Login from './Components/login'
import ListView from './Components/listview'
import MyLists from './Components/mylists'


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
          <h3>Menu</h3>
          <button onClick={this.displayLogin}>Login</button>
          <button onClick={this.displayMyLists}>My Lists</button>
          <button onClick={this.displayListView}>List View</button>
          <Login/>
        </div>
      )
    } else if (this.state.component == 'MyLists') {
      return (
        <div className='constrain'>
          <h3>Menu</h3>
          <button onClick={this.displayLogin}>Login</button>
          <button onClick={this.displayMyLists}>My Lists</button>
          <button onClick={this.displayListView}>List View</button>
          <MyLists/>
        </div>
      )
    } else {
      return (
        <div className='constrain'>
          <h3>Menu</h3>
          <button onClick={this.displayLogin}>Login</button>
          <button onClick={this.displayMyLists}>My Lists</button>
          <button onClick={this.displayListView}>List View</button>
          <ListView/>
        </div>
      )
    }
  }
}


export default App