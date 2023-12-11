import '../ProjectsBlog.css';

function FooterLinks() {

  return (
    <div className='mw700cf'>
      <p>Keep in touch!</p>
      <ul className='flexrc'>
        <li><a href="https://github.com/lrx5" target='_blank'><img src={`src/assets/footer_links/git.svg`} alt="" /></a></li>
        <li><a href="https://ph.linkedin.com/in/john-karl-nolasco-lraxious" target='_blank'><img src={`src/assets/footer_links/li.svg`} alt="" /></a></li>
        <li><a href="https://www.artstation.com/lraxious" target='_blank'><img src={`src/assets/footer_links/art.svg`} alt="" /></a></li>
        <li><a href="https://codepen.io/LRXS" target='_blank'><img src={`src/assets/footer_links/cp.svg`} alt="" /></a></li>
      </ul>
    </div>
  )
}

export default FooterLinks
