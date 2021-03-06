import React from 'react'
import Login from './Components/login'
import MyLists from './Components/mylists'
import ListView from './Components/listview'
import Logo from './logo-yellow.svg'
import { Link, Switch, Route, withRouter } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
      return (
        <div className='constrain'>
          <div className={this.props.location.pathname == '/' ? 'homepage header' : 'header'}>
            {/* <div>
              <Link to='/'>
                <div className="sticker logo animated slideInUp">
                  <img className="decal shadow" src={Logo} alt="" />
                  <img className="decal left" src={Logo} alt="" />
                  <img className="decal right" src={Logo} alt="" />
                </div>
              </Link>
            </div> */}
            <Link to='/'><img src={Logo} className='logo animated slideInUp'/></Link>
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



  export default withRouter(App)

