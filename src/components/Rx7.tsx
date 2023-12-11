import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import '../ProjectsBlog.css';

function Rx7() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>RX-7 Model</h1>
          <h3>Blender • May 2021</h3>
          <p>3D modelled my favorite JDM car, the rx-7 fd. 🎌</p>
          <img src={`src/assets/rx7/rx7_1.png`} alt="" />
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/${'ingen'}`}>
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'ingen_t.png'}`} alt="" />
            </div>
            <div>
              <h3>{'Ingen'}</h3>
              <p>{'Blender'}</p>
            </div>
          </div>
          </Link>
          <Link to={`/${'karzhyn-website'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'karzhyn_t.png'}`} alt="" />
            </div>
            <div>
              <h3>{'Karzhyn Website'}</h3>
              <p>{'Bootstrap'}</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <FooterLinks />
    </div>
  )
}

export default Rx7
