import React from 'react'
import Login from './Components/login'
import ListView from './Components/listview'
import MyLists from './Components/mylists'


class App extends React.Component {
  render() {
    return (
      <div className='constrain'>
        <Login />
        <MyLists />
        <ListView />
      </div>
    )
  }
}


export default App