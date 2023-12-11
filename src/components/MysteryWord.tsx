import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import '../ProjectsBlog.css';

function MysteryWord() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Mystery Word</h1>
          <h3>Unity • July 2020 </h3>
          <p>What's up Gamers! 🎮 I made a Word Master clone from Moxie's minigame in Bookworm Adventures.</p>
          <p><a href={"https://play.google.com/store/apps/details?id=com.Lraxious.MysteryWord&pcampaignid=web_share"} target='_blank'>Go to Playstore</a></p>
        </div>
        <div>
          <h2>Backstory</h2>
          <p>Here's the story of me playing Bookworm Adventures in the old days, while I enjoy playing the main game in creating the longest word possible, Moxie's mini game is a puzzle game where you use logic trying to unravel a 5-letter mystery word. I wanted to play this minigame on my mobile phone, and also maybe try to make a custom game mode where I can set the mystery word and let my friends guess to have some fun. 😁</p>
          <img src={`src/assets/mysteryword/mysteryword_1.png`} alt="" />
          <p>Mind you that this was completed before the reigning era of Wordle. I guess if I had web development skills back then I could have made it big time. 🏆</p>
        </div>
        <div>
          <h2>Development</h2>
          <p>I was just starting Unity back then and I didn't know how to code very well in Unity so I dipped into my student savings and purchased PlayMaker's visual scripting on Humble Bundle when I got the chance. I had all this logic in my head where if the first letter of the word you guessed is equal to the mystery word, then the result correct, thus a golden letter should appear after checking, and so on. I just need to make it work in code.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/mysteryword/mysteryword_v1.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p>The first problem that I had to tackle was to change the letter's position when clicked to the grid.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/mysteryword/mysteryword_v2.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p>You should also be able to remove the letter blocks when clicked again, you can then choose your desired letter blocks again if you have free slots in the row.</p>
          <p>Checking breaks down the word to individual letters and checks for matches on the mystery word. Then the appropriate color must be reflected on the board if any letters have matched the secret word.</p>
          <img src={`src/assets/mysteryword/mysteryword_ftw.jpg`} alt="" />
          <p>Thinking of it now after 3 years, this is an easy game to program that could be made with simple arrays and for loops, but my beginner monkey brain insisted to make this game with an abomination of a spaghetti visual code instead. 💀 I mean, <i>if it works, it works</i>.</p>
        </div>
        <div>
          <h2>Music</h2>
          <p>Great! Now everything is working as intended, the game is actually playable now. It just needs some music and sound effects to improve the overall experience of the game. Music shouldn't be hard to make right? 😅</p>
          <img src={`src/assets/mysteryword/mysteryword_21.png`} alt="" />
          <p>This is where I overestimated myself having no musical instrument experience at all. I got some help with my good friend Kim who atleast have some musical practice in the real world. He helped me compose all of the music for the menus and the game.</p>
          <p>We used a free tool called <a href={"https://boscaceoil.net"} target='_blank'>Bosca Ceoil</a> to make our in game music, and honestly it's pretty cool to play around with even though I kinda suck at making some catchy beats. 🎵</p>
        </div>
        <div>
          <h2>Gameplay</h2>
          <p>Here is a short 12 second video showcasing the gameplay of Mystery Word: 5 Letters.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/mysteryword/mysteryword_v3.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>In the end, the whole project is functional but unoptimized. This is me diving into Unity without a robust programming background. But what's important is I have learned a lot in the development of this game. Thank you for reading this rather long post, and goodluck to your future projects! 😁</p>
        </div>
      </div>
      <div className='mw700c'>
          <p className='mt-64'>Thank you for reading! 🙂<br />You may also like</p>
          <div className='white-line'></div>
      </div>
      <div className='mw1200'>
        <div className='flexrcf'>
          <Link to={`/${'cafeight'}`}>
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'cafeight_t.png'}`} alt="" />
            </div>
            <div>
              <h3>{'CafEight'}</h3>
              <p>{'Blender'}</p>
            </div>
          </div>
          </Link>
          <Link to={`/${'rx7-fd'}`}>  
          <div className="project-card-footer">
            <div>
              <img src={`src/assets/${'rx7_t.png'}`} alt="" />
            </div>
            <div>
              <h3>{'RX-7 Model'}</h3>
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

export default MysteryWord
