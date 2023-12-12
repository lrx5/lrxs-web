import { Link } from 'react-router-dom';
import '../nav.css'

function Nav() {

  return (
    <>
      <nav>
        <div>
        <Link className='lrxs' to="/lrxs-web/" tabIndex={0}>LRXS</Link>
          <ul>
            <li><Link to="/lrxs-web/" tabIndex={0}>Home</Link></li>
            <li><Link to="/lrxs-web/about" tabIndex={0}>About</Link></li>
            <li><Link to="/lrxs-web/contact" tabIndex={0}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
