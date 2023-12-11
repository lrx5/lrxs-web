import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import '../ProjectsBlog.css';
import '../Projects.css';

function KarzhynWebsite() {

  return (
    <div className='container-template pt-96'>
      <div className='mw700 pb'>
        <div>
          <h1>Karzhyn Website</h1>
          <h3>Web Dev • Bootstrap • Blender • November 2023</h3>
          <p>
          Welcome! 👋 I recently built a website to test my Bootstrap skills out. I was inspired to  make a company landing page after seeing the Illustration work of my good friend <a href="https://www.behance.net/karzhynmedia" target='_blank'>Jeron</a> on Karzhyn branding. This personal project took around 2 weeks to code this company idea while exploring more of the features Bootstrap has to offer.
          </p>
          <p><a href={"https://lrx5.github.io/karzhyn/main.html"} target='_blank'>Go to Website</a></p>
        </div>
        <div>
          <h2>Karzhyn Branding</h2>
          <p>Karzhyn's brand features multiple bright colors that represents the business' nature for creativity and flexibility. The vibe just looks bright and fun and I just had to make something out of it.</p>
          <img src={`src/assets/karzhyn_1.png`} alt="" />
          <img src={`src/assets/karzhyn_2.png`} alt="" />
          <img src={`src/assets/karzhyn_3.png`} alt="" />
        </div>
        <div>
          <h2>Pages Preview</h2>
          <p>There are a total of 7 pages, including the confirmation of sending the email form. </p>
          <img src={`src/assets/karzhyn_11.png`} alt="" />
          <p>Here's a couple of screenshots 📸
            when viewing the actual website.</p>
          <img src={`src/assets/karzhyn_12.png`} alt="" />
          <img src={`src/assets/karzhyn_21.png`} alt="" />
          <img src={`src/assets/karzhyn_24.png`} alt="" />
        </div>
        <div>
          <h2>3D Animations</h2>
          <p>I 3D modeled the aluminum bottles that were included in Karzhyn, set up a scene and rendered a few still images to use in the video.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/karzhyn_v2.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p>I also animated a total of four 3-second renders in Blender. The first video is composed of showcasing Karzhyn as a brand, introducing the potential creative works that the company's services provides. Here is my favorite out of the four. 🤗</p>
          <video autoPlay loop muted>
            <source src={'src/assets/karzhyn_v1.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p>Behind the scenes. It almost looks like a huge animation studio. 📽️ The animations for the main hero video was all done here in this single scene.</p>
          <img src={`src/assets/karzhyn_31.png`} alt="" />
        </div>
        <div>
          <h2>Challenges</h2>
          <p>I had a lot of challenges working on this project. Here are some major problems ❗ that I have encountered besides all the debugging fiasco I have done.</p>
          <h2>60-30-10 Rule</h2>
          <p>The first one is whether I should follow the <span>60-30-10</span> rule or not. This brand has <span>5</span> primary colors which is a lot. Having all of them present in a single page might be distracting to the users so I opted to make it simple, sticking to the rule and used Electric Purple as the main color of the page.</p>
          <p>I only used all the colors when hovering the nav and changed the color of the text accordingly to improve the visibility contrast.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/karzhyn_v3.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <h2>Forms Functionality</h2>
          <p>I also have limited experience with back-end code. In order to make the forms work, I used a cloud-based service called EmailJS to handle sending emails with ease. </p>
          <img src={`src/assets/karzhyn_22.png`} alt="" />
          <img src={`src/assets/karzhyn_23.png`} alt="" />
          <h2>No Components</h2>
          <p>Having started to learn React in creating this personal website, LRXS, components are a huge time saver. Before, I was painstakingly updating the footer on Karzhyn Website one by one manually after altering its design, or changing the content of the other pages. Maybe it's just my bad habit of working on all parts simultaneously, but without components I just had a hard time making my work efficiently as possible.</p>
        </div>
        <div className='mb-40'>
          <h2>Final Thoughts</h2>
          <p>All in all, I am quite satisfied with the final output. Considering that this is my first major project in Bootstrap, I'd say I did pretty well. I am quite happy with the animations that I rendered, although the transitions could use some work, this is where I think that I should have created a connection to each video in a certain way, like a color or same velocity/direction switch that they do in video editing. It took me some time to get the hang of Bootstrap, not gonna lie there was a point where I wished that I should have just coded it in Vanilla CSS. 😅</p>
          <p>If you've made it here, I am honored. Thank you for taking the time to read my long post. 😊 Please do check out <a href="https://www.behance.net/karzhynmedia" target='_blank'>Jeron's</a> work for more Illustration content.</p>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
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
          <Link to={`/${'create-with-clint-double-memory'}`}>
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'memory_t.png'}`} alt="" />
            </div>
            <div>
              <h3>{'Memory'}</h3>
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

export default KarzhynWebsite
