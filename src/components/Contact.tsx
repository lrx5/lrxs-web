import { useEffect } from 'react';
import FooterLinks from './FooterLinks';
import '../about.css'; // Import the CSS file for styling

const Contact = () => {
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

    const hiddenElements = document.querySelectorAll('.hidden_y');
    hiddenElements.forEach((el: Element) => observer.observe(el));

    return () => {
      // Cleanup code if needed
      hiddenElements.forEach((el: Element) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className='fullpage about'>
      <div className="section">
        <h2 className='hidden_y'>I would love to <span className='customrgb'>work</span> with you!</h2>
        <h3 className='hidden_y'>Send me an email</h3>
        <h3 className='hidden_y'>|</h3>
        <h3 className='hidden_y'>jk.nolasco.lrxs@gmail.com</h3>
        <h3 className='hidden_y'>|</h3>
        <a href="https://drive.google.com/file/d/1pDoPQzhsf_I4lfWTF87cJfQogUm-mcGJ/view?usp=sharing" target='_blank'><h3 className='hidden_y'>Download CV</h3></a>
        <FooterLinks />
      </div>
    </div>
  );
};

export default Contact;