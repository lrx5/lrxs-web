import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import '../ProjectsBlog.css';

function FriendsList() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Friends List Website</h1>
          <h3>Web Dev • Vanilla HTML • September 2023</h3>
          <p>Welcome back! 👋 I made a simple website featuring my relationships with my friends inspired by the Stardew valley heart meters.</p>
          <p><a href={"https://lrx5.github.io/friendslistVanilla/"} target='_blank'>Go to Website</a></p>
        </div>
        <div>
          <h2>Backstory</h2>
          <p>My love for Stardew Valley has been reborn after my fsriend decided to play with me for a couple of days. <i>Well technically, I gifted the game and was kinda forced to play with me.</i> 😅 But anyways, I have played this game before, and can say that I am pretty experienced when it comes to farming and forging bonds with the villagers.</p>
          <img src={`src/assets/friendslist/friendslist_2.png`} alt="" />
        </div>
        <div>
          <h2>Game Heart Meters</h2>
          <p>I have played a lot of Harvest Moon back in the days and I love the relationship mechanic to the townspeople and the bachelors/bachelorettes, it really felt like you were building a real connection with them, with their own characters and personality.</p>
          <img src={`src/assets/friendslist/friendslist_4.png`} alt="" />
          <p>It's the same in Stardew Valley, you can talk to them or give them gifts to increase your relationship with them. <i>If they like the gift, that is.</i> The great thing here is you can track how well you are doing with each of the character's heart meters. Unlike in Harvest Moon, one can only see the hearts on bachelors/bachelorettes.</p>
          <img src={`src/assets/friendslist/friendslist_3.png`} alt="" />
          <p>After a while, I thought of a good idea of making my own heart meter list website featuring my own friends. A win-win situation where I increase my website building skills while showing my friends that I appreciate them and treasure them dearly.</p>
        </div>
        <div>
          <h2>List Column</h2>
          <p>At the top of the list, there is a heart-ranking system that I thought up of, better have some hearts than nothing at all eh? Moving on to the list, it is a single-page layout containing all the hoverable friend cards. The color of the hearts gets animated once the selected card gets hovered, making it look - well, <i>cool</i>.</p>
          <p>Here's an example card:</p>
        </div>
        <div className="flcard glass">
          <div className="flcard-content1">
            <img className="main-img" src={`src/assets/friendslist/friendslist_c1.png`}/>
          </div>
          <div className="flcard-content2">
            <h2>Lraxious</h2>
            <p>I like an ice-cold Grande Sized Watermelon flavored Zagu with Extra Boba Pearls on a hot and sunny day.</p>
            <div className="heart-meter">
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
              <img className="rgb-heart" src={`src/assets/friendslist/mdi_heart.svg`} />
            </div>
          </div>
        </div>
        <div>
          <h2>Order Buttons</h2>
          <p>I also implemented sorter buttons where it would change the orders based on the heart values and recent friends just to test my new Javascript skills out. I have to admit in consulting ChatGPT quite a bit just to confirm for any flaws in my code.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/friendslist/friendslist_v1.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>This is the first minor website that I have ever done. I already noticed some things to improve after deploying the final build. One is to add a search bar for the friends list, this is just to speed up the search for curious people. Two, is to make an admin account that has an add card functionality for easier addition of future friends, and an edit mode where you can update the values for the cards.</p>
          <p>Even though the website is simple as it is, I really hope my friends liked it. It's a good start for me in applying my new web development skills. Who knows, I might remaster this someday in the future, you'll just have to find out. 🤗</p>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
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
        </div>
      </div>
      <FooterLinks />
    </div>
  )
}

export default FriendsList
