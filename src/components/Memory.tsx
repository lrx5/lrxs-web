import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import '../ProjectsBlog.css';

function Memory() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Create w/ Clint: Double Memory</h1>
          <h3>Blender • June 2023</h3>
          <p>Hi there! 🤗 I have recently joined Clint's discord server; Create with Clint where you make weekly renders based on a prompt chosen by the higher ups. I thought I could try to make some renders while having fun in Blender. The theme for this week was "Double Memory". I immediately thought of the Playstation 1 🎮 memory cards for saving game data, which also pairs with my memory from childhood playing games in our room at night.</p>
          <img src={`src/assets/memory/memory_3.png`} alt="" />
        </div>
        <div>
          <h2>Planning</h2>
          <p>I came up with a plan to recreate our room by listing the things that I remembered being there:
          </p>
          <ul>
            <li>Bed</li>
            <li>Cables</li>
            <li>Controllers</li>
            <li>CRT TV</li>
            <li>Elmo Stool</li>
            <li>Game Disks</li>
            <li>Memory Cards</li>
            <li>Planters Cheeze Balls</li>
            <li>PlayStation 1</li>
            <li>TV Rack</li>
            <li><i>Beautiful Magazines</i> 😏</li>
          </ul>
        </div>
        <div>
          <h2>Modelling</h2>
          <p>After listing everything, I started to model the things right away. I opted not to import any models and just create them from scratch to further reinforce my modelling skills. Here's a few individual renders of the objects from the scene:</p>
          <img src={`src/assets/memory/memory_1.png`} alt="" />
          <img src={`src/assets/memory/memory_5.png`} alt="" />
          <img src={`src/assets/memory/memory_6.png`} alt="" />
          <img src={`src/assets/memory/memory_7.png`} alt="" />
        </div>
        <div>
          <h2>Rendering</h2>
          <p>I like to render new frames after adding a couple of new models into the scene just to see what my current progress is like.
          </p>
          <img src={`src/assets/memory/memory_t1.png`} alt="" />
          <img src={`src/assets/memory/memory_t2.png`} alt="" />
          <img src={`src/assets/memory/memory_t3.png`} alt="" />
          <img src={`src/assets/memory/memory_t4.png`} alt="" />
          <img src={`src/assets/memory/memory_3.png`} alt="" />
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>This is my first submission to the server and I feel good about my work. Seeing other people's submissions were fun and got a good load of ideas and inspirations from them. Although, there are things that I need to improve on. One is the lighting, I have seen other works with Godlike lighting. It was hard for me to replicate that in my scene where it was closed and dark. Two is the materials, the materials that I made for the objects are not that high quality for close-up renders. I am getting there, I just need more time to polish up my lighting and materials even more. ✨</p>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/${'caster-wheel'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'casterwheel.png'}`} alt="" />
            </div>
            <div>
              <h3>{'Caster Wheel'}</h3>
              <p>{'Blender'}</p>
            </div>
          </div>
          </Link>
          <Link to={`/${'salad-kitchen'}`}>
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'salad_t.jpg'}`} alt="" />
            </div>
            <div>
              <h3>{'Salad Kitchen'}</h3>
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

export default Memory
