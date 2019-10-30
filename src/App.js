import React from 'react';
import bottom from '../src/images/bottom.jpg';
import useScrolInfo from './Components/useScrollInfo';
import './Style/App.css';
import './Style/Profile.css';




function App() {
  return (
    <div className="flex-container">
      <div>
        <ul className='navbar'>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div className="flex-item-0" >

        <h1>Welcome</h1>
        {<useScrolInfo />}



      </div>

      <div className="flex-item-1">
        <div className="Propic" >
        <figure class="snip1515">
          <div class="profile-image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample83.jpg" alt="sample83" /></div>
          <figcaption>
            <h3>Norman Gordon</h3>
            <h4>Web Designer</h4>
            <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
          </figcaption>
        </figure>
        </div>


      </div>

      <div className="flex-item-2">
        <img src={bottom} alt="backGround3" id='about' />
      </div>
    </div>

  );
}

export default App;

