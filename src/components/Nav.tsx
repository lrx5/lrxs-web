import { Link } from 'react-router-dom';
import '../nav.css'

function Nav() {
  return (
    <>
      <nav>
        <div>
        <Link className='lrxs' to="/">LRXS v0.4</Link>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
