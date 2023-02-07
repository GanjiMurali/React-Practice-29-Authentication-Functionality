// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const {history} = props

  const logoutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button className="logout-button" type="button" onClick={logoutButton}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
