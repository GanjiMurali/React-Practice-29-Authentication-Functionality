// Write your JS code here
import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

class Login extends Component {
  credentials = JwtTokenValue => {
    const {history} = this.props
    Cookies.set('jwt_token', JwtTokenValue, {expires: 30})
    // console.log(JwtTokenValue)
    history.replace('/')
  }

  getLoginData = async () => {
    const details = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data, response)
    if (response.ok === true) {
      this.credentials(data.jwt_token)
    }
  }

  render() {
    const accessToken = Cookies.get('JWT_Token')

    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <h1>Please Login</h1>
        <button className="button" type="button" onClick={this.getLoginData}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
