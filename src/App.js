import React from 'react';
import bottom from '../src/images/bottom.jpg';
import backGround3 from '../src/images/boardwalk.jpg';
import useScrolInfo from './Components/useScrollInfo';
import './App.css';




function App() {
  return (
    <div className="flex-container">
      <div>
        <ul className='navbar'>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#infor">{useScrolInfo()}</a></li>
        </ul>
      </div>
      <div className="flex-item-0" >
        
          <h1>Welcome</h1>
          
        
        
       
      </div>

      <div className="flex-item-1">

        <img src={backGround3} alt="backGround2" />
      </div>

      <div className="flex-item-2">
        <img src={bottom} alt="backGround3" id='about' />
      </div>
    </div>

  );
}

export default App;

