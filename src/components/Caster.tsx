import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import caster_1 from '../assets/casterwheel/caster9.png';
import caster_2 from '../assets/casterwheel/caster10.png';
import caster_3 from '../assets/casterwheel/caster11.png';
import salad_T from '../assets/thumbnails/salad_t.jpg';
import king_T from '../assets/thumbnails/kingtiger_t.png';
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
          <img src={caster_1} alt="" />
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
          <img src={caster_1} alt="" />
          <img src={caster_2} alt="" />
          <img src={caster_3} alt="" />
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
          <Link to={`/lrxs-web/${'salad-kitchen'}`}>
          <div className="project-card-footer">
            <div>
              <img src={salad_T} alt="" />
            </div>
            <div>
              <h3>{'Salad Kitchen'}</h3>
              <p>{'Blender'}</p>
            </div>
          </div>
          </Link>
          <Link to={`/lrxs-web/${'king-tiger'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={king_T} alt="" />
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
