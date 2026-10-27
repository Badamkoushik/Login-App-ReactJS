import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  onClickLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClickLogout={this.onClickLogout} />
          ) : (
            <Login onClickLogin={this.onClickLogin} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
