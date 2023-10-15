import classes from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <p className={classes["footer__text"]}>Created by Jess Pates</p>
      <div className={classes["footer__links"]}>
        <a href="https://www.linkedin.com/in/jess-pates/" target="_blank" rel="noreferrer"><i className={`${classes["footer__link"]}`}><FontAwesomeIcon icon={faGithubSquare} /></i></a>
        <a href="https://github.com/jpates2/" target="_blank" rel="noreferrer"><i className={`${classes["footer__link"]}`}><FontAwesomeIcon icon={faLinkedin} /></i></a>
      </div>
      <div className={classes["footer__license"]}>SVG Credit: Vincent Le Moign, CC BY 4.0, via Wikimedia Commons. License <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="noreferrer"><u>here.</u></a>
      </div>
    </footer>
  )
}

export default Footer;
