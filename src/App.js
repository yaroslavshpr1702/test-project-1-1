import './App.css';
import MainContent from './content/MainContent'
import StepOneContent from './content/StepOneContent'
import StepTwoContent from './content/StepTwoContent'
import StepThreeContent from './content/StepThreeContent'
import StepFourContent from './content/StepFourContent'
import StepFiveContent from './content/StepFiveContent'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="header__text">
          <h1>Autumn Giveaways for FREE</h1>
          <p>Participate in Autumn Giveaway and treat yourself to nice and refreshing cosmetics for free</p>
        </div>
        <img className="banner_picture" src="/images/banner_picture.png" alt="header_img"/>
      </header>
      <MainContent/>
      <StepOneContent/>
      <StepTwoContent/>
      <StepThreeContent/>
      <StepFourContent/>
      <StepFiveContent/>
      <div className="app__how_it_work">
        <h1>How does it work?</h1>
        <div className="steps">
          <a><img src="/images/step_ico_one.png"/></a>
          <img src="/images/right.png"/>
          <a><img src="/images/step_ico_two.png"/></a>
          <img src="/images/right.png"/>
          <a><img src="/images/step_ico_three.png"/></a>
          <img src="/images/right.png"/>
          <a><img src="/images/step_ico_four.png"/></a>
          <img src="/images/right.png"/>
          <a><img src="/images/step_ico_five.png"/></a>
        </div>
      </div>
      <footer className="app__footer">
        <div className="app__footer info">
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

export default App;