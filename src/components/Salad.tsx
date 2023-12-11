import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import '../ProjectsBlog.css';

function Salad() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Salad Kitchen</h1>
          <h3>Blender • July 2022</h3>
          <p>
          Hello! 👋 Salad was holding an event in creating wallpapers so I decided to join in. <i>This feels like an advertisment but I am not sponsored I swear.</i> I'm just gonna make this post short and sweet.
          </p>
          <img src={`src/assets/salad/salad_5.jpg`} alt="" />
        </div>
        <div>
          <h2>Planning</h2>
          <p>Salad is a crypto mining application where they show the process of mining as chopping, like in a kitchen. So I decided to just make the wallpaper a kitchen involving all the fruits and vegetables as the things to be mined.</p> 
          <img src={`src/assets/salad/salad_10.png`} alt="" />
          <p>I got inspired by this particular contemporary counter from casefurniture and started to make a table from that idea.</p>
        </div>
        <div>
          <h2>Modelling</h2>
          <p>First of all, I got the vegetable and fruit models from <a href="https://www.youtube.com/@Regoliste" target='_blank'>Regoliste</a>. His food market tutorial is seriously one of the underrated gems out there, go check it out! The rest are modelled by me.</p>
          <img src={`src/assets/salad/salad_11.png`} alt="" />
          <p>I created the Salad logo using triangular boxes and placed it on the back to make it look as a wall decal. Made the chopping board the same color as the bar graphs to emphasize mining/chopping. Added some wooden and glass bowls, a knife, chopped fruits. And that's pretty much it.</p> 
        </div>
        <div>
          <h2>Rendering</h2>
          <img src={`src/assets/salad/salad_1.png`} alt="" />
          <img src={`src/assets/salad/salad_2.png`} alt="" />
          <img src={`src/assets/salad/salad_3.png`} alt="" />
          <img src={`src/assets/salad/salad_4.png`} alt="" />
          <img src={`src/assets/salad/salad_5.jpg`} alt="" />
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>I really liked the final output where I included the blue to yellow gradient overlay. It looked really <i>cool.</i> To be honest, the vegetable and fruit models carried the whole scene, I don't think the final render would look good without them. I loved this simple wallpaper that I even made it my wallpaper at some point. Not to toot my own horn, but me winning the wallpaper contest is an icing on the cake. 🍰</p>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
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
        </div>
      </div>
      <FooterLinks />
    </div>
  )
}

export default Salad
