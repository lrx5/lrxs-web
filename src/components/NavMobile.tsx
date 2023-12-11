import { useState } from 'react';
import { Link } from 'react-router-dom';
import solar_nav from '../assets/navmobile/solar-h.png';
import '../nav.css'

function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
    <section className="navmobile">
      <div className="navmobile-container">
        <Link className='lrxs' to="/lrxs-web/">LRXS</Link>
        <img className='solar' src={solar_nav} onClick={toggleMenu} alt="Hamburger" />
      </div>
    </section>
    <section className={isMenuOpen ? 'navsmallmenushow' : 'navsmallmenu'}>
        <div className="navsmallmenu-container">
          <div className='nml'><Link className='nml-links' to="/lrxs-web/" onClick={toggleMenu}>Home</Link></div>
          <div className='nml'><Link className='nml-links' to="/lrxs-web/about" onClick={toggleMenu}>About</Link></div>
          <div className='nml'><Link className='nml-links' to="/lrxs-web/contact" onClick={toggleMenu}>Contact</Link></div>
        </div>
    </section>
    </>
  )
}

export default NavMobile
