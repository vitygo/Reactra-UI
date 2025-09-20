import './Footer.css'
import {Link} from "react-router-dom"


export default function Footer(){
    return(
        <footer className="footer-section">
            <div className="footer-section__grid">
            <Link to='/'><div className="footer-section__logo"><img src="./2.png" className="footer-logo__img" alt="logo"/></div></Link>
                <ul className="footer-section__cl1 cl">
                    <li className="cl__title">title</li>
                    <li>about us</li>
                    <li>about</li>
                    <li>about</li>

                
                </ul>
                <ul className="footer-section__cl2 cl">
                    <li className="cl__title">title</li>
                    <li>about</li>
                    <li>about</li>
                    <li>about</li>
                </ul>
                <ul className="footer-section__cl3 cl">
                    <li className="cl__title">title</li>
                    <li>about</li>
                    <li>about</li>
                    <li>about</li>
                </ul>
            </div>
        </footer>
    );
}