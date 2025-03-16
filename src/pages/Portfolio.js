import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';
function Portfolio() {
return (
<><Header />
<section className="portfolio" id="portfolio">
<div className="container">
<div className="section-head">
<h1 className="heading">Our Projects</h1>
<p>The objective of ElectraGen is to enable innovative energy solutions that help secure a better future for all.</p>
</div>
<div className="projects-container">
<div className="project-item">
<span className="icon"><i className="fa fa-database"></i></span>
<h6>Shore Energy</h6>
<p>Generation of electricity by using river sand, harnessing natural resources for sustainable power solutions.</p>
</div>

<div className="project-item">
<span className="icon"><i className="fa fa-upload"></i></span>
<h6>Smart Energy Meter</h6>
<p>Reducing electricity consumption and wastage through intelligent monitoring and advanced technology integration.</p>
</div>

<div className="project-item">
<span className="icon"><i className="fa fa-camera"></i></span>
<h6>Lofoo</h6>
<p>Empowering street vendors through digital connectivity, creating sustainable business opportunities.</p>
</div>
</div>
</div>
</section>
<Footer />
</>
);
}
export default Portfolio; 