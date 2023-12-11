import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
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
          <img src={`src/assets/startup/startup_0.png`} alt="" />
          <img src={`src/assets/startup/startup_1.png`} alt="" />
          <img src={`src/assets/startup/startup_2.png`} alt="" />
          <img src={`src/assets/startup/startup_3.png`} alt="" />
          <img src={`src/assets/startup/startup_4.png`} alt="" />
          <img src={`src/assets/startup/startup_5.png`} alt="" />
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/${'mystery-word'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'mw_t.jpg'}`} alt="" />
            </div>
            <div>
              <h3>{'Mystery Word: Five Letters'}</h3>
              <p>{'Unity'}</p>
            </div>
          </div>
          </Link>
          <Link to={`/${'cafeight'}`}>
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'cafeight_t.png'}`} alt="" />
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
