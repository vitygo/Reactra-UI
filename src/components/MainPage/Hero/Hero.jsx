import './Hero.css'
import {Link} from 'react-router-dom'

export default function Hero(){
    return(
        <div className="hero-section">
            <div className="hero-section__hero-text">
                <h1 className="hero-text__hero-title"><span>Build Modern</span> React Apps <span>Faster</span> Than Ever.</h1>
                <Link to='/#componets-showcase'><button className='hero-text__cta-btn'>EXPLORE</button></Link>
                <p className="hero-text__hero-text">Save hours of development with ready-to-use, customizable components. Clean code, responsive design, and production-ready performance — all in one place.</p>
            </div>
            {/* <div className="hero-section__hero-img">
                <img src='../macbooki.png' className='hero-img__device-img' alt='laptop'/>
            </div> */}
        </div>
    )
}