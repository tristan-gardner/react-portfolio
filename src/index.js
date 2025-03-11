import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Import CSS and JS libraries
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css';
import './style.css';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

// Import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Projects from './components/projects/project.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';



const Index = () => {
    const [openProject, setOpenProject] = useState(null)
  return (
    <>
      <Intro />
      <About />
      <Portfolio setOpenProject={setOpenProject}/>
      <Projects openProject={openProject}/>
      <Contact />
      <BackToTop />
      <Preloader />
    </>
  );
};

ReactDOM.render(<>
    <Navbar />
    <Index />
    </>,
  document.getElementById('root')
);

serviceWorker.unregister();