import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import cafe_1 from '../assets/cafeight/cafeight_5.png';
import cafe_2 from '../assets/cafeight/cafeight_11.png';
import cafe_3 from '../assets/cafeight/cafeight_12.png';
import cafe_4 from '../assets/cafeight/cafeight_1.png';
import cafe_5 from '../assets/cafeight/cafeight_2.png';
import cafe_6 from '../assets/cafeight/cafeight_3.png';
import cafe_7 from '../assets/cafeight/cafeight_4.png';
import rx7_T from '../assets/thumbnails/rx7_t.png';
import ingen_T from '../assets/thumbnails/ingen_t.png';
import '../ProjectsBlog.css';

function CafEight() {

  return (
    <div className='container-template pt-96'>
      <div className='mw700 pb'>
        <div>
          <h1>CafeEight</h1>
          <h3>Blender • October 2021</h3>
          <p>
          The times on the pandemic were pretty rough. With classes having been switched to online, lockdowns enforced everywhere, you're stuck in your house with nowhere to go. At this point in time, I was starting to miss out hanging with my friends during our breaktime at the cafeteria.
          </p>
          <img src={cafe_1} alt="" />
        </div>
        <div>
          <h2>Planning</h2>
          <p>I listed down all the objects that I want to make for the scene:</p>
          <ul>
            <li>Calculator</li>
            <li>Cellphone</li>
            <li>Chairs & Table</li>
            <li>Earphones</li>
            <li>Folders</li>
            <li>Handkerchief</li>
            <li>Hubbz Carton</li>
            <li>ID</li>
            <li>Mango Graham Shake</li>
            <li>Pens</li>
            <li>Plates</li>
            <li>Tissues</li>
            <li>Tray</li>
            <li>Yellow Pad</li>
          </ul>
        </div>
        <div>
          <h2>Modelling</h2>
          <p>This is where my background on LinkedIn has come from. I was so pleased with my calculator model that I decided to do a close-up shot of it and make it as a background.</p>
          <img src={cafe_2} alt="" />
          <p>I really liked how my Graham Mango Shake turned out. 🥤 It looks amazing close-up with all the graham bits on top.</p>
          <img src={cafe_3} alt="" />
        </div>
        <div>
          <h2>Rendering</h2>
          <img src={cafe_4} alt="" />
          <img src={cafe_5} alt="" />
          <img src={cafe_6} alt="" />
          <img src={cafe_7} alt="" />
          <img src={cafe_1} alt="" />
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/lrxs-web/${'rx7-fd'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={rx7_T} alt="" />
            </div>
            <div>
              <h3>{'RX-7 Model'}</h3>
              <p>{'Blender'}</p>
            </div>
          </div>
          </Link>
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
        </div>
      </div>
      <FooterLinks />
    </div>
  )
}

export default CafEight
