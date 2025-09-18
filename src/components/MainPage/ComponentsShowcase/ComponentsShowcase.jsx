import './ComponentsShowcase.css'
import './ComponentCard.css'

export default function ComponentsShowcase(){
    return(
        <section className="components-showcase-section">
            <h2 className="components-showcase-section__title"><span>Explore</span> the Components</h2>
            <p className="components-showcase-section__text">Browse our library of ready-to-use React components. Click any component to see a live demo and code examples, so you can quickly integrate them into your project</p>
            <div className="components-showcase-section__components-grid">
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>

            </div>
        </section>
    );
}

export function ComponentCard(){
    return(
        <div className="component-card"></div>
    )
}