import { Link } from 'react-router-dom';
import '../ProjectsBlog.css';
import ingen_1 from '../assets/ingen/ingen_1.png';
import ingen_2 from '../assets/ingen/ingen_6.png';
import ingen_3 from '../assets/ingen/ingen_11.png';
import ingen_4 from '../assets/ingen/ingen_12.png';
import ingen_5 from '../assets/ingen/ingen_2.png';
import ingen_6 from '../assets/ingen/ingen_3.png';
import ingen_7 from '../assets/ingen/ingen_4.png';
import ingen_8 from '../assets/ingen/ingen_5.png';
import karzhyn_T from '../assets/thumbnails/karzhyn_t.png';
import friends_T from '../assets/thumbnails/friendslistv_t.png';
import FooterLinks from './FooterLinks';
/*update*/
function Ingen() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Ingen</h1>
          <h3>Blender • October 2020</h3>
          <p>Made a scene about a place where me and my friends previously spent our times playing together after school. 😊 This place no longer exists in the real world.</p>
          <img src={ingen_1} alt="" />
          <p>Want a random fact? Ingen stands for Internet Generation.</p>
        </div>
        <div>
          <h2>Planning</h2>
          <p>Since the place is gone now, I have no way of getting real references by going there in person. I had to resort to scavenging any photo of the place online. By some miracle, I found a great shot of the place which covers a wide area to get my bearings around the scene.</p>
          <img src={ingen_2} alt="" />
          <p>I also found their brand logo. I used this as a sign outside the glass windows of the establishment.</p>
          <img src={ingen_3} alt="" />
          <p>I tried going to the website link on that logo and what do you know, it still works. Although its pretty much abandoned now. 💀</p>
          <img src={ingen_4} alt="" />
        </div>
        <div>
          <h2>Rendering</h2>
          <p>I can't decide at first if I want to use the original spotlight colors present in the internet cafe or to just do it my style.</p>
          <img src={ingen_5} alt="" />
          <img src={ingen_6} alt="" />
          <img src={ingen_7} alt="" />
          <img src={ingen_8} alt="" />
          <img src={ingen_1} alt="" />
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>This is a tribute to Ingen. Thank you for all the good memories. ❤️ And, I remember that I forgot to redeem my points. Feels bad man.</p>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
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
          <Link to={`/lrxs-web/${'friends-list-website'}`}>
          <div className="project-card-footer">
            <div>
              <img src={friends_T} alt="" />
            </div>
            <div>
              <h3>{'Friends List Website'}</h3>
              <p>{'Vanilla HTML'}</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <FooterLinks />
    </div>
  )
}

export default Ingen
