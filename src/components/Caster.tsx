import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import '../ProjectsBlog.css';
import Spline from '@splinetool/react-spline';

function Caster() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Caster Wheel</h1>
          <h3>Blender • May 2023</h3>
          <p>Hi there! 👋 I tried to make a realistic 3D Caster wheel sample as a project submission based job application.</p>
          <img src={`src/assets/casterwheel/caster9.png`} alt="" />
        </div>
        <div className='spline'>
          <h2>Clay Model</h2>
          <p>Try dragging it around! Unfortunately you can't see the materials that I made for the model in Spline. </p>
          <Spline scene="https://prod.spline.design/OaekWiJmrS-dVJ71/scene.splinecode" />
        </div>
        <div>
          <h2>Modelling</h2>
          <p>The process of creating this caster only took a single day, a combined 6 hours of modelling and tweaking. I had blueprints to work from which sped up the modelling process, as I am used to making models from CAD before in school.</p>
        </div>
        <div>
          <h2>Rendering</h2>
          <img src={`src/assets/casterwheel/caster9.png`} alt="" />
          <img src={`src/assets/casterwheel/caster10.png`} alt="" />
          <img src={`src/assets/casterwheel/caster11.png`} alt="" />
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>I have received important feedbacks that the wheel's edges were not smooth enough, and the metal material on the wheel were far on the rough side. I learned to apply more subdivisions in the future and to be very meticulous in rendering the final outputs. Nevertheless, I am thankful for the company for giving me an opportunity to show my work. 😊</p>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
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
          <Link to={`/${'king-tiger'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'kingtiger_t.png'}`} alt="" />
            </div>
            <div>
              <h3>{'King Tiger'}</h3>
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

export default Caster
