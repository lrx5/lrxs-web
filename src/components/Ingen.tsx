import { Link } from 'react-router-dom';
import '../ProjectsBlog.css';
import FooterLinks from './FooterLinks';

function Ingen() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Ingen</h1>
          <h3>Blender • October 2020</h3>
          <p>Made a scene about a place where me and my friends previously spent our times playing together after school. 😊 This place no longer exists in the real world.</p>
          <img src={`src/assets/ingen/ingen_1.png`} alt="" />
          <p>Want a random fact? Ingen stands for Internet Generation.</p>
        </div>
        <div>
          <h2>Planning</h2>
          <p>Since the place is gone now, I have no way of getting real references by going there in person. I had to resort to scavenging any photo of the place online. By some miracle, I found a great shot of the place which covers a wide area to get my bearings around the scene.</p>
          <img src={`src/assets/ingen/ingen_6.png`} alt="" />
          <p>I also found their brand logo. I used this as a sign outside the glass windows of the establishment.</p>
          <img src={`src/assets/ingen/ingen_11.png`} alt="" />
          <p>I tried going to the website link on that logo and what do you know, it still works. Although its pretty much abandoned now. 💀</p>
          <img src={`src/assets/ingen/ingen_12.png`} alt="" />
        </div>
        <div>
          <h2>Rendering</h2>
          <p>I can't decide at first if I want to use the original spotlight colors present in the internet cafe or to just do it my style.</p>
          <img src={`src/assets/ingen/ingen_2.png`} alt="" />
          <img src={`src/assets/ingen/ingen_3.png`} alt="" />
          <img src={`src/assets/ingen/ingen_4.png`} alt="" />
          <img src={`src/assets/ingen/ingen_5.png`} alt="" />
          <img src={`src/assets/ingen/ingen_1.png`} alt="" />
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
          <Link to={`/${'friends-list-website'}`}>
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'friendslistv_t.png'}`} alt="" />
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
