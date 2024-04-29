import "../style/footer.scss";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-column">
          <div className="logo-footer">
            <img alt="logo_up" className="logo-footer-img" src={logo}></img>
          </div>
          <div className="footer-text">
            <strong>NULLA LAOREET</strong>
            <br />
            METUS QUIS
            <br />
            PELLENTESQUE LOBORTIS
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-text">
            <a className="footer-link" href="https://github.com/KarolinaPater/">
              Github
            </a>
            <br />
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/karolina-pater-38b194303/"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
