import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import cw_all from '../assets/controller_workflow/ortoall.png';
import cw_all2 from '../assets/controller_workflow/ortoall2.png';
import cw_1 from '../assets/controller_workflow/Controller_UV_test.png';
import cw_2 from '../assets/controller_workflow/Controller_Diffuse.png';
import cw_3 from '../assets/controller_workflow/Controller_Normal.png';
import cw_4 from '../assets/controller_workflow/Controller_Roughness.png';
import cw_5 from '../assets/controller_workflow/Controller_AO.png';
import cw_6 from '../assets/controller_workflow/Controller_UV.png';
import cw_7 from '../assets/controller_workflow/cover1.png';
import cw_10 from '../assets/controller_workflow/shader_baked.png';
import cw_11 from '../assets/controller_workflow/Statistics.png';
import cw_gif1 from '../assets/controller_workflow/baking-cake.gif';
import cw_ob1 from '../assets/controller_workflow/original_baked.png';
import cw_ob2 from '../assets/controller_workflow/original_baked2.png';
import karzhyn_T from '../assets/thumbnails/karzhyn_t.png';
import Lrxs_T from '../assets/thumbnails/lrxs_t.png';
import '../ProjectsBlog.css';
import '../Projects.css';

function Lrxs() {
  return (
    <div className='container-template pt-96'>
      <div className='mw700 pb'>
        <div>
          <h1>Controller Workflow</h1>
          <h3>Blender • February 2024</h3>
          <p>
          This post shows the UV unwrap, vertices count and texture map baking process. The model I used here is my mid-poly version of the dual shock controller for the PlayStation1. I had to cut down the vertices count quite a bit to make it optimized for in-game use.
          </p>
          <img src={cw_7} alt="" />
        </div>
        <div>
        <h2>Orthographic Views</h2>
        <p>Here are some rendered, and viewport shots from the front, top, and side view.</p>
        <img src={cw_all} alt="" />
        <img src={cw_all2} alt="" />
        </div>
        <div>
        <h2>Statistics</h2>
        <p>The target vertices count for this mid-poly model is to be less than 5000. Anything higher than that will fall into the high-poly range. For low poly, Normal maps are going to shine on almost everything including the buttons and directional pad.</p>
        <ul>
            <li>Objects: 9</li>
            <li>Vertices: 4,709</li>
            <li>Edges: 9,098</li>
            <li>Faces: 4,425</li>
            <li>Triangles: 9,010</li>
        </ul>
        <img src={cw_11} alt="" />
        </div>
        <div>
          <h2>Baked Maps</h2>
          <p>Making procedural textures in Blender is pretty easy to do, however the nodes are not supported by game engine and cannot be exported. So how do we use these materials in a game you ask? We can export them by baking them to image textures. It is pretty similar to the concept of light baking in Unity as you apply the light's brightness on the texture's surfaces to conserve computer resources.</p>
          <img src={cw_gif1} alt="" />
          <figcaption>Lilo & Stitch @ Walt Disney</figcaption>
          <p>The baked image textures are all in 2048x2048 resolution. I did not include any metallic map as the model does not have any visible metallic parts. Lower and higher resolutions of the baked textures should also be done for low poly and high poly models.</p>
          <div className='flexrow'>          
            <img className='img50' src={cw_1} alt="" />
            <img className='img50' src={cw_2} alt="" />
          </div>
          <figcaption>UV Unwrap & Diffuse Map (2K Resolution)</figcaption>
          <div className='flexrow'>          
            <img className='img50' src={cw_3} alt="" />
            <img className='img50' src={cw_4} alt="" />
          </div>
          <figcaption>Normal Map & Roughness Map (2K Resolution)</figcaption>
          <div className='flexrow'>          
            <img className='img50' src={cw_5} alt="" />
            <img className='img50' src={cw_6} alt="" />
          </div>
          <figcaption>Ambient Occlusion Map & UV Map (2K Resolution)</figcaption>
        </div>
        <div>
          <h2>Application & Comparison</h2>
          <p>From software to game engine, proper UV unwrapping and texture map baking is essential in providing quality textures for the 3D models. If the UV unwrap is too small on detailed surfaces, not only a loss of quality could be seen in the resulting baked maps, the texture would appear a lot larger.</p>
          <p>Here are the baked texture maps used as inputs for the Principled Shader:</p>
          <img src={cw_10} alt="" />
          <figcaption>Baked Maps as Input @ Blender</figcaption>
          <p>From a distance there is little to no differences at all except when viewed up close.</p>
          <img src={cw_ob1} alt="" />
          <figcaption>Original (Having no Ambient Occlusion) & Baked on Viewport view</figcaption>
          <img src={cw_ob2} alt="" />
          <figcaption>Original & Baked Render</figcaption>
        </div>
        <div className='mb-40'>
          <h2>Final Thoughts</h2>
          <p>While this is just a preview for the mid-poly alone, low poly and high poly models should also be done in conjunction with lower and higher resolutions of the baked textures. This is needed for when the game supports multiple settings for lower and higher graphics. For improvements, I need to reduce the amount of UV islands present in future projects as this would be a nightmare for hand-painted textures. Considering that almost every texture is procedurally generated, these maps gets the job done. 👍</p>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/lrxs-web/${'lrxs-website'}`}>
          <div className="project-card-footer">
            <div>
              <img src={Lrxs_T} alt="" />
            </div>
            <div>
              <h3>{'LRXS Main'}</h3>
              <p>{'React + Vite'}</p>
            </div>
          </div>
          </Link>
          <Link to={`/lrxs-web/${'karzhyn-website'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={karzhyn_T } alt="" />
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

export default Lrxs
