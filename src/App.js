import React from 'react';
import Album from '../src/Album'
import ProfileImg from '../src/images/keivon_cp.jpg';
import './Style/App.css';
import './Style/Profile.css';




function App() {
  return (
    <div className="flex-container">
      <div>
        <ul className='navbar'>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="flex-item-0" id='home' >
        <div className="Propic" >
          <figure class="snip1515">
            <div class="profile-image"><img src={ProfileImg} alt="sample83" /></div>
            <figcaption>
              <h3>Keivon Proctor</h3>
              <h4>Full Stack Developer</h4>
              <p>I’m excited to be at the deployment phase of my career as a web developer. I am ambitious, adventurous, assiduous,
                and animated. My area of interest is mostly dealing with back-end because I love to see how things work. But after doing
                some work in React I would like to learn more on the front-end side. The main reason why I want to become a developer is
              to see the magic of software. I want to look past the curtain to see what is really going on. </p>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="flex-item-1" id='Projects'>
        <Album />
      </div>

      <div className="flex-item-2" id='contact'>


      </div>
    </div>

  );
}

export default App;

