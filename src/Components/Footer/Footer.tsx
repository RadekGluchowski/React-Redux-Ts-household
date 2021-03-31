import './Footer.css'
import { CREATED_BY, AUTOR_GITHUB_LINK, AUTOR } from './Assets/constants'

const Footer = () => {
  return (
    <div className="footer-container">
      &copy; {new Date().getFullYear()} {CREATED_BY}
      <a href={AUTOR_GITHUB_LINK}> {AUTOR}  </a>
    </div>
  );
};

export default Footer;
