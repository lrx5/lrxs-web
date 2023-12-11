import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import start_1 from '../assets/startup/startup_0.png';
import start_2 from '../assets/startup/startup_1.png';
import start_3 from '../assets/startup/startup_2.png';
import start_4 from '../assets/startup/startup_3.png';
import start_5 from '../assets/startup/startup_4.png';
import start_6 from '../assets/startup/startup_5.png';
import mystery_T from '../assets/thumbnails/mw_t.jpg';
import cafe_T from '../assets/thumbnails/cafeight_t.png';
import '../ProjectsBlog.css';

function StartUp() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>"Start Up" Themed Backgrounds</h1>
          <h3>Blender • October 2021</h3>
          <p>
          Inspired from the South Korean television series, Start Up. Rendered some backgrounds for the webinar that our team hosted on October. 🌟
          </p>
          <img src={start_1} alt="" />
          <img src={start_2} alt="" />
          <img src={start_3} alt="" />
          <img src={start_4} alt="" />
          <img src={start_5} alt="" />
          <img src={start_6} alt="" />
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/lrxs-web/${'mystery-word'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={mystery_T} alt="" />
            </div>
            <div>
              <h3>{'Mystery Word: Five Letters'}</h3>
              <p>{'Unity'}</p>
            </div>
          </div>
          </Link>
          <Link to={`/lrxs-web/${'cafeight'}`}>
          <div className="project-card-footer">
            <div>
              <img src={cafe_T} alt="" />
            </div>
            <div>
              <h3>{'CafEight'}</h3>
              <p>{'Blender'}</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <FooterLinks />
    </div>
  )
}

export default StartUp
