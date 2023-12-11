import '../ProjectsBlog.css';
import git_icon from '../assets/footer_links/git.svg';
import li_icon from '../assets/footer_links/li.svg';
import art_icon from '../assets/footer_links/art.svg';
import cp_icon from '../assets/footer_links/cp.svg';
function FooterLinks() {

  return (
    <div className='mw700cf'>
      <p>Keep in touch!</p>
      <ul className='flexrc'>
        <li><a href="https://github.com/lrx5" target='_blank'><img src={git_icon} alt="" /></a></li>
        <li><a href="https://ph.linkedin.com/in/john-karl-nolasco-lraxious" target='_blank'><img src={li_icon} alt="" /></a></li>
        <li><a href="https://www.artstation.com/lraxious" target='_blank'><img src={art_icon} alt="" /></a></li>
        <li><a href="https://codepen.io/LRXS" target='_blank'><img src={cp_icon} alt="" /></a></li>
      </ul>
    </div>
  )
}

export default FooterLinks
