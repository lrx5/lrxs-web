import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import '../ProjectsBlog.css';

function KingTiger() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>King Tiger</h1>
          <h3>Blender • April 2022</h3>
          <p>
          If you like oil guzzling metal behemoths then you have come on the right place! 🛢️
          </p>
          <img src={`src/assets/kingtiger/kingtiger_1.png`} alt="" />
        </div>
        <div>
          <h2>Planning</h2>
          <p>I am a simple man to please, <span>explosions = fun</span>. I love playing World of Tanks Blitz because of its wide variety of playable tanks. They come in different shapes and sizes, from armaments to armor. The gameplay is pretty quick as well, you can finish one in under 5 minutes, but I digress.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/kingtiger/kingtiger_v1.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p>After seeing realistic artworks from the game's loading page and its real world photographs, it gave me the motivation to create an artwork out of my favorite tank, the Tiger II or the King Tiger. This image right here is where I took a lot of inspiration in the story of a lone Tiger II defending Budapest.</p>
          <img src={`src/assets/kingtiger/kingtiger_11.jpg`} alt="" />
        </div>
        <div>
          <h2>Modelling</h2>
          <p>Modelling the tank body wasn't particularly hard, it is mostly rectangular with minimal curves at some parts of the turret. The most challenging part of this project was the tracks, although it was not that visible in the renders, I tried my best to realistically replicate the model.</p>
          <img src={`src/assets/kingtiger/kingtiger_12.png`} alt="" />
          <p>I also made sure to include scratches/imperfections on the tank's surfaces to demonstrate the wear the tank has gone through battle, not to mention the harsh winter. ❄️</p>
          <img src={`src/assets/kingtiger/kingtiger_13.png`} alt="" />
        </div>
        <div>
          <h2>Rendering</h2>
          <p>At first I was debating if I should color the tank tan/desert style, but it did not complement the snowy environment very well so I decided to do a snow camo paint later on. </p>
          <img src={`src/assets/kingtiger/kingtiger_2.png`} alt="" />
          <img src={`src/assets/kingtiger/kingtiger_3.png`} alt="" />
          <img src={`src/assets/kingtiger/kingtiger_4.png`} alt="" />
          <img src={`src/assets/kingtiger/kingtiger_5.png`} alt="" />
          <img src={`src/assets/kingtiger/kingtiger_6.png`} alt="" />
          <img src={`src/assets/kingtiger/kingtiger_1.png`} alt="" />
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>The only thing that I would change in this scene is the black chimney on the bottom right. I feel like I could've put more attention and detail to the 3D model after finalizing the output. On the other side, everything else looks great. The photoscanned rubble looks great, the tank model and decals look amazing for my taste.</p>
        </div>
        <div>
          <h2>Bonus⭐</h2>
          <p>If you have made it this far, here I have a bonus animation content for you. I was originally going to make this project an animation, but I might have bitten more than I can chew 😅 and sticked to a single frame render.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/kingtiger/kingtiger_bonus.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/${'start-up-themed-backgrounds'}`}>
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'startup_t.png'}`} alt="" />
            </div>
            <div>
              <h3>{'"Start Up" Themed backgrounds'}</h3>
              <p>{'Blender'}</p>
            </div>
          </div>
          </Link>
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
        </div>
      </div>
      <FooterLinks />
    </div>
  )
}

export default KingTiger
