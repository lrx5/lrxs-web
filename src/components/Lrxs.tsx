import { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import lrxs_1 from '../assets/lrxs/nana_website.png';
import lrxs_2 from '../assets/lrxs/lrxs_allicons.png';
import lrxs_3 from '../assets/lrxs/lrxs_3.png';
import lrxs_4 from '../assets/lrxs/lrxs_2.png';
import lrxs_5 from '../assets/lrxs/lrxs_4.png';
import karzhyn_T from '../assets/thumbnails/karzhyn_t.png';
import friends_T from '../assets/thumbnails/friendslistv_t.png';
import '../ProjectsBlog.css';
import '../Projects.css';

function Lrxs() {
  const [displayText, setDisplayText] = useState('Go to Website');

  const handleClick = () => {
    if (displayText === 'Go to Website') {
      setDisplayText('But, you are already here! 😄');
    }
  };
  return (
    <div className='container-template pt-96'>
      <div className='mw700 pb'>
        <div>
          <h1>LRXS Portfolio</h1>
          <h3>Web Dev • React • Vite • December 2023</h3>
          <p>
          Hello, my dear visitors! 👋 I have always wanted to create my own portfolio suited to properly showcase my works through clickable cards. This is the issue I first faced in creating earlier versions of my portfolio is that I was just copying the templates I see from the internet. Yes, having built the website is great and all, but it feels like it has no soul to it. My personal touch per se.
          </p>
          <p><a href={"#"} onClick={handleClick}>{displayText}</a></p>
        </div>
        <div>
          <h2>Inspiration</h2>
          <p>I was heavily inspired by <a href="https://nanacodesign.com" target='_blank'>nanacodesign's</a> website in the creation of my portfolio. I also wanted to show my works in a documented, well-organized manner. This drove me to make my own version of it, with my style. I recommend checking her website out! I love her works, and I have learned a lot from reading her informative projects and case studies. ✨</p>
          <img src={lrxs_1} alt="" />
          <figcaption>Home page @ nanacodesign.com</figcaption>
        </div>
        <div>
          <h2>Development</h2>
          <p>First I created the clickable project cards with React's Link component. I could easily add future projects by containing all the information in a projects array and mapping the projects to their respective div cards. They are also contained in a grid having a 3-card per row layout on desktops to 1-card per row on mobile. I also set the thumbnail images to grayscale, it only gets it's color back and scales up when it is hovered.</p>
          <img src={lrxs_4} alt="" />
          <figcaption>Project cards in early development</figcaption>
          <p>For the About page, I made sure the scroll type is set to snap so that you could only see one section of the page at a time. I continued creating the content for each of the sections with the svg and resized icons exported from Figma. </p>
          <img src={lrxs_2} alt="Svg & Icons from Figma" />
          <figcaption>Svg & Icons from Figma</figcaption>
          <p>The last one is the Contact page. I decided to keep it simple and just put all the necessary information there including my email and my downloadable CV.</p>
        </div>
        <div>
          <h2>Animation</h2>
          <p>For the animations, I have watched <a href="https://www.youtube.com/watch?v=T33NN_pPeNI" target='_blank'>Beyond Fireship's</a> tutorial on making beautiful animations on scroll. The CSS and translate properties are not new to me, and I am fairly certain this is used in the movement of the text. What's new for me is the Intersection Observers. After researching this API, I found out that this would serve as a great data collection to see how much time the user spent viewing a certain content.</p>
        </div>
        <div>
          <h2>Challenges</h2>
          <p>Overall this project did not take that long. My momentum was at an all time high, developing this website in a quick efficient pace and nothing can stop me. Or so, I thought.</p>
          <iframe src="https://giphy.com/embed/l2JdTgYZ7VG4EeBVe" width="480" height="366" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          <figcaption>Basically my momentum on that day</figcaption>
          <h2>Img imports not showing on deployment</h2>
          <p>It should've just taken a whole week maximum, but I had troubles in building and deployment because of the img source pathing. Yes the images work on the development server but not so much on the deployed website. I have tried to fix the bug for a whole day, visited various stack overflows, read the vite documentation, and almost asked for help.</p>
          <div className='w50'>
            <img src={lrxs_5} alt="" />
          </div>
          <figcaption>Failed builds</figcaption>
          <p>The solution was simple and overlooked, the fix was just to start at the directory of the file that needs the image imported.</p>
          <div className='w50'>
            <img src={lrxs_3} alt="" />
          </div>
          <figcaption>File import pathing</figcaption>
          <p>For example a MyComponent inside a components folder needs to import a single file; my_image.png, the starting path would be at the components folder, which we would need to go up one folder with ".." - With this, we are now at the main src folder, we just need to go inside assets and images folder to access the file my_image.png. The working code would now then be:</p>
          <code>import my_image from '../assets/images/my_image.png'</code>
        </div>
        <div className='mb-40'>
          <h2>Final Thoughts</h2>
          <p>I can confidently say that I am speeding up the development process each time I spend time making a full website. Back then it is taking me 2 whole weeks just to deploy a website, but now it's more like a week now. My first experience with React + Vite was awesome. I will continue to use React and will soon be exploring how to use the different its hooks in the future.</p>
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
              <img src={karzhyn_T } alt="" />
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

export default Lrxs
