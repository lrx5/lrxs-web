import { useEffect } from 'react';
import FooterLinks from './FooterLinks';
import about_1 from '../assets/about/image v.png';
import about_2 from '../assets/about/image 77.png';
import about_3 from '../assets/about/image 81.png';
import about_4 from '../assets/about/image 79.png';
import about_5 from '../assets/about/image 86.png';
import about_6 from '../assets/about/image 91.png';
import about_7 from '../assets/about/image 90.png';
import about_8 from '../assets/about/image 83.png';
import about_9 from '../assets/about/image 78.png';
import about_10 from '../assets/about/image 103.png';

import about_11 from '../assets/about/image 82.png';
import about_12 from '../assets/about/image 84.png';
import about_13 from '../assets/about/image 96.png';
import about_14 from '../assets/about/image 85.png';
import about_15 from '../assets/about/image 87.png';
import about_16 from '../assets/about/image 97.png';
import about_17 from '../assets/about/image 93.png';
import about_18 from '../assets/about/image 102.png';
import about_19 from '../assets/about/image 100.png';
import about_20 from '../assets/about/image 101.png';
import about_21 from '../assets/about/image 99.png';

import about_22 from '../assets/about/image 88.png';
import about_23 from '../assets/about/image 89.png';
import about_24 from '../assets/about/image 92.png';
import about_25 from '../assets/about/image 94.png';
import about_26 from '../assets/about/image 95.png';
import about_27 from '../assets/about/image 98.png';
import about_28 from '../assets/about/image 104.png';

import about_S1 from '../assets/about/graph1.svg';
import about_S2 from '../assets/about/graph2.svg';
import '../about.css'; // Import the CSS file for styling

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el: Element) => observer.observe(el));

    return () => {
      // Cleanup code if needed
      hiddenElements.forEach((el: Element) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className='fullpage about'>
      <div className="section">
        <h1 className='hidden'>Welcome!</h1>
        <p className='hidden'>My real name is John, and I go by LRXS.<br />I'm a Computer Engineer graduate who likes computer-based things.<br />Web Dev, Game Dev, 3D Modeller.</p>
        <img src={about_1} className='hidden down' alt="" />
        <div className='page-number'>
          <p>1/6</p>
        </div>
      </div>
      <div className="section">
        <h2 className='hidden customrgb'>Remember that unused tools degrade over time</h2>
        <div className=''>
          <h3 className='hidden'>Current Skills</h3>
          <p className='hidden'>These are the things I study and frequently use up to this day.</p>
          <div className='logo-row'>
            <img src={about_2} className='hidden' alt="" />
            <img src={about_3} className='hidden' alt="" />
            <img src={about_4} className='hidden' alt="" />
            <img src={about_5} className='hidden' alt="" />
            <img src={about_6} className='hidden' alt="" />
            <img src={about_7} className='hidden' alt="" />
            <img src={about_8} className='hidden' alt="" />
            <img src={about_9} className='hidden' alt="" />
            <img src={about_10} className='hidden' alt="" />
          </div>
        </div>
        <div>
          <h3 className='hidden'>Revivable Skills</h3>
          <p className='hidden'>Skills that have not been used for 6 months+ that needs a little refresher.</p>
          <div className='logo-row gs-50'>
            <img src={about_11} className='hidden' alt="" />
            <img src={about_12} className='hidden' alt="" />
            <img src={about_13} className='hidden' alt="" />
            <img src={about_14} className='hidden' alt="" />
            <img src={about_15} className='hidden' alt="" />
            <img src={about_16} className='hidden' alt="" />
            <img src={about_17} className='hidden' alt="" />
            <img src={about_18} className='hidden' alt="" />
            <img src={about_19} className='hidden' alt="" />
            <img src={about_20}className='hidden' alt="" />
            <img src={about_21} className='hidden' alt="" />
          </div>
        </div>
        <div>
          <h3 className='hidden'>Things that I would love to learn</h3>
          <p className='hidden'>The ones that I haven't touched but would love to learn one day.</p>
          <div className='logo-row gs-100'>
            <img src={about_22} className='hidden' alt="" />
            <img src={about_23} className='hidden' alt="" />
            <img src={about_24} className='hidden' alt="" />
            <img src={about_25} className='hidden' alt="" />
            <img src={about_26} className='hidden' alt="" />
            <img src={about_27} className='hidden' alt="" />
            <img src={about_28} className='hidden' alt="" />
          </div>
        </div>
        <div className='page-number'>
          <p>2/6</p>
        </div>
      </div>
      <div className="section">
        <h2 className='hidden'>My never-ending interests</h2>
        <div className='flexrc2cc gap-40'>
          <div className='circle-container hidden'>
            <img src={about_S1} className='hidden' alt="SVG1" />
            <div className="circle hidden"></div>
          </div>
          <div className='wave-container hidden'>
            <div className='wave hidden'>
              <svg width="483" height="182" viewBox="0 0 483 182" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 91.9999C19.5 22.9999 85.2738 2.42374 121.5 92.4998C158.5 184.5 223 151 241 92.4998C259.5 23.4998 309.7 -73.1002 362.5 92.4998C415.3 258.1 464 151 482 92.4998" stroke="white" stroke-width="3" stroke-linecap="round" className="path"/>
              </svg>
            </div>
            <img src={about_S2} className='hidden pt-custom1' alt="SVG2" />
          </div>
        </div>
        <div>
          <p className='hidden mt-64'>UI Engineer | QA Analyst | Accessibility | DevOps | Product Models | Visualization | 3D Animation | ML | AI</p>
        </div>
        <div className='page-number'>
          <p>3/6</p>
        </div>
      </div>
      <div className="section relative">
        <div className='svgbg hidden_nf'>
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 16 16"><path fill="currentColor" d="m15.81 10l-2.5-5H14a.5.5 0 0 0 0-1h-.79a6.04 6.04 0 0 0-4.198-1.95L9 2a1 1 0 0 0-2 0v.05a6.168 6.168 0 0 0-4.247 1.947L2 4a.5.5 0 0 0 0 1h.69l-2.5 5H0c0 1.1 1.34 2 3 2s3-.9 3-2h-.19L3.26 4.91a.525.525 0 0 0 .159-.148A4.842 4.842 0 0 1 6.994 3.06L7 14H6v1H4v1h8v-1h-2v-1H9V3.06a4.71 4.71 0 0 1 3.524 1.693a.519.519 0 0 0 .193.186L10.19 10H10c0 1.1 1.34 2 3 2s3-.9 3-2h-.19zM5 10H1l2-3.94zm6 0l2-3.94L15 10h-4z"/></svg>
        </div>
        <h2 className='hidden'>MBTI</h2>
        <div className='mw700'>
        <table className="custom-table hidden">
            <tr>
              <td><h3>I</h3></td>
              <td>
                <span className='cv-title'>Introvert</span><br />
                I may not talk very much, but when I do - I make sure it has importance.
              </td>
            </tr>
            <tr>
              <td><h3>N</h3></td>
              <td>
                <span className='cv-title'>Intuitive</span><br />
                I'm just a guy, trying to find my real purpose in life. I like learning things that I'm interested in, and I strive to be good in most sectors in order to help anyone in need.
              </td>
            </tr>
            <tr>
              <td><h3>F</h3></td>
              <td>
              <span className='cv-title'>Feeling</span><br />
                My inner justice aims to keep everything balanced as far as my logical, moral compass will allow it. Say anything significant and I will remember.
              </td>
            </tr>
            <tr>
              <td><h3>J</h3></td>
              <td>
              <span className='cv-title'>Judging</span><br />
                Growing up in an authoritarian household, I like to plan things and have no problems following schedules.
                </td>
            </tr>
        </table>
        </div>
        <div className='page-number'>
          <p>4/6</p>
        </div>
      </div>
      <div className="section">
        <div className='we_div mw700'>
          <div className='the_div'>
            <h4 className=''>Work Experiences</h4>
            <p className='cv-title'>Server Administrator Intern</p>
            <p className='cv-subtitle mb-20'>@Aureal, Manila | Oct 2022 - Dec 2022</p>
            <p className='cv-body ms-40 mb-20'>Installed VMs and set up Google Cloud. Maintained the intern's Google Cloud VM security by using Google Cloud Shell.</p>
            <p className='cv-body ms-40 mb-20'>Provided access keys to fellow intern developers and documented log activity.</p>
            <p className='cv-title'>Mobile Developer Intern</p>
            <p className='cv-subtitle mb-20'>@Melham Construction Corporation, Manila | May 2022 - July 2022</p>
            <p className='cv-body ms-40 mb-20'>Created a mobile application including it's UI/UX Figma redesign & front-end functionalities with Android Studio.</p>
            <p className='cv-title'>Multimedia Intern</p>
            <p className='cv-subtitle mb-20'>@Rex Book Store, Manila | Jan 2018</p>
            <p className='cv-body ms-40 mb-40'>Completed shading, line-art tasks with images and figures in Adobe Photoshop.</p>
            <h4 className=''>Education</h4>
            <p className='cv-body ms-40'>2022 <span className='customrgb'>Bachelor of Computer Engineering</span>, Far Eastern University: Institute of Technology.</p>
            <p className='cv-body ms-40 mb-20'>2018 Senior High School STEM, Pasig Catholic College.</p>
            <p className='cv-body ms-40'>Independent Education</p>
            <p className='cv-body ms-40'>2023 HTML-CSS-JS Boot camp, freeCodeCamp</p>
            <p className='cv-body ms-40'>2020 C# Unity Game Developer 2D, Udemy:GameDev.tv</p>
            <p className='cv-body ms-40 mb-40'>2018 Independent Blender Courses, Youtube Channels</p>

            <h4 className=''>Awards</h4>
            <p className='cv-body ms-40 mb-40'>2022 Salad Kitchen Background: Blender</p>

            <h4 className=''>Certificates</h4>
            <p className='cv-body ms-40 display-none'>2023 Front End Development Libraries, freeCodeCamp</p>
            <p className='cv-body ms-40'>2023 JavaScript Algorithms and Data Structures, freeCodeCamp</p>
            <p className='cv-body ms-40'>2023 Responsive Web Design, freeCodeCamp</p>
            <p className='cv-body ms-40'>2021 CCNA: Introduction to Networks</p>
            <p className='cv-body ms-40'>2021 CCNA: Introduction to Packet Tracer</p>
            <p className='cv-body ms-40'>2021 MTA: Introduction to Programming Using Java -
            Certified</p>
            <p className='cv-body ms-40 pb-40'>2020 MTA: Introduction to Programming Using Python -
            Certified</p>
          </div>
        </div>
        <div className='page-number'>
          <p>5/6</p>
        </div>
      </div>
      <div className="section">
        <h2 className='hidden'>Got a gig for me?</h2>
        <h3 className='hidden'>Contact Me</h3>
        <FooterLinks />
        <div className='page-number'>
          <p>6/6</p>
        </div>
      </div>
    </div>
  );
};

export default About;