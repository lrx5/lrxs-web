import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import rx_1 from '../assets/rx7/rx7_1.png';
import ingen_T from '../assets/thumbnails/ingen_t.png';
import karzhyn_T from '../assets/thumbnails/karzhyn_t.png';
import '../ProjectsBlog.css';

function Rx7() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>RX-7 Model</h1>
          <h3>Blender • May 2021</h3>
          <p>3D modelled my favorite JDM car, the rx-7 fd. 🎌</p>
          <img src={rx_1} alt="" />
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/lrxs-web/${'ingen'}`}>
          <div className="project-card-footer">
            <div>
              <img src={ingen_T} alt="" />
            </div>
            <div>
              <h3>{'Ingen'}</h3>
              <p>{'Blender'}</p>
            </div>
          </div>
          </Link>
          <Link to={`/lrxs-web/${'karzhyn-website'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={karzhyn_T} alt="" />
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
