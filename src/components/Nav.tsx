import { Link } from 'react-router-dom';
import '../nav.css'

function Nav() {
  return (
    <>
      <nav>
        <div>
        <Link className='lrxs' to="/">LRXS v0.4</Link>
          <ul>
            <li><Link to="/lrxs-web/" >Home</Link></li>
            <li><Link to="/lrxs-web/about">About</Link></li>
            <li><Link to="/lrxs-web/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
