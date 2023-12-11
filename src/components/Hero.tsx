import { useEffect } from 'react';
import '../index.css'

function Hero() {
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
    <>
      <section className='pt-96'>
        <h1 className='hidden_y'>Hi, I'm LRXS.<br />Web Dev, Game Dev, 3D Modeller.<br />A bit of a Generalist.</h1>
      </section>
    </>
  )
}

export default Hero
