import './MainPage.css'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import ComponentsShowcase from './ComponentsShowcase/ComponentsShowcase' 

export default function MainPage(){
    return(
        <div className="main-page">
            <Hero/>
            <Features/>
            <ComponentsShowcase/>
        </div>
    )
}

