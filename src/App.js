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
        <h1>Autumn Giveaways for FREE</h1>
        <p>Participate in Autumn Giveaway and treat yourself to nice and refreshing cosmetics for free</p>
        <img src="" alt="header_img"></img>
      </header>
      <MainContent/>
      <StepOneContent/>
      <StepTwoContent/>
      <StepThreeContent/>
      <StepFourContent/>
      <StepFiveContent/>
      <div className="app__how_it_work">
        <h1>How does it work?</h1>
        <div className="how_it_work steps">
          <a>Easy as 1-2-3</a>
          <a>s2</a>
          <a>s3</a>
          <a>s4</a>
          <a>s5</a>
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