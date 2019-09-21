import React from 'react'
import Login from './Components/login'
import MyLists from './Components/mylists'
import ListView from './Components/listview'
import Logo from './logo.png'
import { Link, Switch, Route } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
      return (
        <div className='constrain'>
          <img src={Logo} className='logo'/>
          <div className='menu'>
          <Link to='/'><button className='active'>Login</button></Link>
          <Link to='/lists'><button>My Lists</button></Link>
          </div>
          <div className='constrain__inner'>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/lists' component={MyLists}/>
            <Route path='/listview' component={ListView}/>
          </Switch>
          </div>
        </div>
      )
    }
  }



export default App

