import './Features.css'

export default function Features(){
    return(
        <section className='features-section'>
            <h2 className='features-section__title'>Made for Developers</h2>
            <p className='features-section__text'>Everything you need to build modern, responsive, and customizable UIs without the hassle.</p>
            <div className="features-section__features-grid">
                <div className='features-grid__feature'>
                    <h3 className='feature__title'>Easy Integration</h3>
                    <p className='feature__text'>Plug and play with minimal setup.</p>
                </div>
                <div className='features-grid__feature'>
                    <h3 className='feature__title'>Customizable Styles</h3>
                    <p className='feature__text'>Adapt to your design system in seconds.</p>
                </div>
                <div className='features-grid__feature'>
                    <h3 className='feature__title'>Responsive by Default</h3>
                    <p className='feature__text'>Works seamlessly on any screen size.</p>
                </div>
                <div className='features-grid__feature'>
                    <h3 className='feature__title'>Modern Design</h3>
                    <p className='feature__text'>Clean, elegant, and professional look.</p>
                </div>
                <div className='features-grid__feature'>
                    <h3 className='feature__title'>Reusable Components</h3>
                    <p className='feature__text'>Clean, elegant, and professional look.</p>
                </div>
                <div className='features-grid__feature'>
                    <h3 className='feature__title'>Well Documented</h3>
                    <p className='feature__text'>Clear examples and guides for every component.</p>
                </div>
                <div className='features-grid__feature'>
                    <h3 className='feature__title'>Modular Imports</h3>
                    <p className='feature__text'>Use only what you need, nothing extra.</p>
                </div>
                <div className='features-grid__feature'>
                    <h3 className='feature__title'>Open Source</h3>
                    <p className='feature__text'>Free to use, transparent, and community-driven.</p>
                </div>
            </div>
        </section>
    )
}