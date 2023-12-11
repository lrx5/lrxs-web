import Hero from './Hero';
import Projects from './Projects';
import '../Projects.css';
import FooterLinks from './FooterLinks';

function HomePage() {

  return (
    <>
      <Hero />
      <Projects />
      <div className='flexrc'>
        <FooterLinks />
      </div>
    </>
  )
}

export default HomePage
