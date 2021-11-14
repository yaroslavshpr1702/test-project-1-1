import './App.css';
import MainContent from './content/MainContent'
import StepOneContent from './content/StepOneContent'
import StepTwoContent from './content/StepTwoContent'
import StepThreeContent from './content/StepThreeContent'
import StepFourContent from './content/StepFourContent'
import StepFiveContent from './content/StepFiveContent'

import { React, Component } from 'react';

//function App() {
class App extends Component {
  GetStep(step) {
    switch (step) {
      case 1:
        console.log('Step One:', step);
        break;
      case 2:
        console.log('Step Two: ', step);
        break;
      case 3:
        console.log('Step Three: ', step);
        break;
      case 4:
        console.log('Step Four: ', step);
        break;
      case 5:
        console.log('Step Five: ', step);
        break;
    }
  };

  Check() {
    for (var i = 0; i < 5; i++) {
      console.log('hi');
    }
  }
  render() {
  return (
    <div className="app">
      <header className="app__header header">
        <div className="header__text">
          <h1>Autumn Giveaways for FREE</h1>
          <p>Participate in Autumn Giveaway and treat yourself to nice and refreshing cosmetics for free</p>
        </div>
        <img className="header__banner_picture" src="/images/banner_picture.png" alt="header_img"/>
      </header>
      <MainContent/>
      <StepOneContent/>
      <StepTwoContent/>
      <StepThreeContent/>
      <StepFourContent/>
      <StepFiveContent/>
      <div className="app__how_it_work how_it_work text_hide">
        <h1>How does it work?</h1>
        <div className="how_it_work__steps steps">
          <div className="how_it_work__step_rows step_rows">
            <div className="how_it_work__step step">
              <button onClick={() => {this.GetStep(1)}}><img src="/images/step_ico_one.png" alt="step_one"/></button>
            </div>
            <img className="how_it_work__rights rights" src="/images/right.png" alt="right"/>
            <div className="how_it_work__step step">
              <button onClick={() => {this.GetStep(2)}}><img src="/images/step_ico_two.png" alt="step_two"/></button>
              <p>Choose product</p>
            </div>
          </div>
          <img className="how_it_work__rights rights" src="/images/right.png" alt="right"/>
          <div className="how_it_work__step_rows step_rows">
          <div className="how_it_work__step step">
            <button onClick={() => {this.GetStep(3)}}><img src="/images/step_ico_three.png" alt="step_three"/></button>
            <p>Buy product</p>
          </div>
            <img className="how_it_work__rights rights" src="/images/right.png" alt="right"/>
          <div className="how_it_work__step step">
            <button onClick={() => {this.GetStep(4)}}><img src="/images/step_ico_four.png" alt="step_four"/></button>
            <p>Test and share review</p>
          </div>
          </div>
          <img className="how_it_work__rights rights" src="/images/right.png" alt="right"/>
          <div className="how_it_work__step step">
            <button onClick={() => {this.GetStep(5)}}><img src="/images/step_ico_five.png" alt="step_five"/></button>
            <p>Get 100% money back</p>
          </div>
        </div>
      </div>
      <footer className="app__footer footer text_hide">
        <div className="footer_info">
          <ul>
            <li><b>Privacy and Terms</b></li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
          </ul>
          <ul>
            <li><b>Need Help?</b></li>
            <li>mail@gmail.com</li>
          </ul>
          <ul>
            <li><b>Social</b></li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <p>© All Rights Reserved</p>
      </footer>
      
    </div>
  );
  }
}

export default App;