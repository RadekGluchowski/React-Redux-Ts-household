import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      &copy; {new Date().getFullYear()} Created By:
      <a href="https://github.com/RadekGluchowski"> Radosław Głuchowski </a>
    </div>
  );
};

export default Footer;
