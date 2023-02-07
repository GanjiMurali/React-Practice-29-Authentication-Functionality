// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="un-order-list">
    <li className="list-link ">
      <Link className="link" to="/">
        Home
      </Link>
    </li>
    <li className="list-link about">
      <Link className="link" to="/about">
        About
      </Link>
    </li>
  </ul>
)

export default Header
