import React from 'react'
import Login from './Components/login'
import MyLists from './Components/mylists'
import ListView from './Components/listview'
import Logo from './logo-yellow.svg'
import { Link, Switch, Route } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
      return (
        <div className='constrain'>
          <div className="header">
            <Link to='/'><img src={Logo} className='logo animated slideInUp'/></Link>
          </div>
          <div className='menu'>
          <Link to='/' className='button'>Login</Link>
          <Link to='/lists' className='button'>My Lists</Link>
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

