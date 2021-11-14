import './App.css';

import { React, Component } from 'react';
import ReactDOM from 'react-dom';

//function App() {
class App extends Component {
  GetStep(step) {
    var isVertical = true;
    if (window.innerWidth < 321) {
      console.log('Window (T) width:',window.innerWidth);
      isVertical = false;
    }
    else {
      console.log('Window (PC) width:',window.innerWidth);
      isVertical = true;
    };
    console.log(isVertical);

    switch (step) {
      case 1:
        console.log('Step One:', step);

        var element = (
          <div className="content__step_one step_one">
            <img className="step_one__step_bar step_bar" alt="step_1"/>
            <div className="step_one__info info">
                <h1>Step 1</h1>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet metus. Curabitur at luctus massa. Vestibulum pretium sem tortor, vitae mattis odio accumsan vitae. Fusce id luctus erat:</p>
                <ol>
                    <li>Mauris rutrum interdum condimentum.</li>
                    <li>Donec commodo quis arcu eget pretium.</li>
                </ol>
                <button>Agree and continue</button>
            </div>
            <img className="step_one__picture_giveaway picture_giveaway" src="/images/picture_giveaway_color 1.png" alt="bg_img"/>
          </div>
        );
        ReactDOM.render(element, document.querySelector('.content'));

        if (isVertical) {
          document.querySelector('.how_it_work').setAttribute('style','top: 835px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1275px');
        }
        else {
          document.querySelector('.how_it_work').setAttribute('style','top: 500px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1060px');
        }
        
        //document.querySelector('.step_bar').setAttribute('src','/images/v_step_one.png');

        break;
      case 2:
        console.log('Step Two: ', step);

        var element = (
          <div className="content__step_two step_two">
            <img className="step_two__step_bar step_bar" alt="step_2"/>
            <div className="step_two__info info">
                <h1>Step 2</h1>
                <h1>Share Facebook post</h1>
                <p>To participate in this giveaway please share this giveaway offer with your friends. Not only your friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of your friends that participates in this giveaway!</p>
                <button>continue</button>
            </div>
            <img className="step_two__facebook_post facebook_post" src="/images/facebook_post.png" alt="bg_img"/>
            <img className="step_two__press_here_block press_here_arrow" alt="press_here_arrow_img"/>
            <p className="step_two__press_here_block press_here_text">Press Here</p>
          </div>
        );
        ReactDOM.render(element, document.querySelector('.content'));

        if (isVertical) {
          document.querySelector('.how_it_work').setAttribute('style','top: 835px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1275px');
        }
        else {
          document.querySelector('.how_it_work').setAttribute('style','top: 750px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1310px');
        };

        //document.querySelector('.step_bar').setAttribute('src','/images/v_step_two.png');

        break;
      case 3:
        console.log('Step Three: ', step);
        
        var element = (
          <div className="content__step_three step_three">
            <img className="step_three__step_bar step_bar" alt="step_3"/>
            <div className="step_three__info info">
                <h1>Step 3</h1>
                <h1>Amazon Prime</h1>
                <p>Do you have an Amazon Prime account?</p>
                <p>To be able to participate in this giveaway you need to have Amazon Prime.</p>
                <div className="step_three__buttons buttons">
                    <button className="accept_button">Yes, i have</button>
                    <button className="disaccept_button">no, i don’t have</button>
                </div>
                
            </div>
            <img className="step_three__picture_giveaway picture_giveaway" src="/images/picture_giveaway_color 1.png" alt="bg_img"/>
          </div>
        );
        ReactDOM.render(element, document.querySelector('.content'));
  
        if (isVertical) {
          document.querySelector('.how_it_work').setAttribute('style','top: 835px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1275px');
        }
        else {
          document.querySelector('.how_it_work').setAttribute('style','top: 455px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1015px');
        };

        //document.querySelector('.step_bar').setAttribute('src','/images/v_step_three.png');

        break;
      case 4:
        console.log('Step Four: ', step);
        
        var element = (
          <div className="content__step_four step_four">
            <img className="step_four__step_bar step_bar" alt="step_4"/>
            <div className="step_four__info info">
                <h1>Step 4</h1>
                <h1>How to Buy a Product with 100% BONUS!</h1>
                <ul className="buy_product_ways">
                    <li className="list_markers"><img className="list_markers_images" src="/images/number one.png" alt="n one"/><p>You need to Buy our Product on Amazon at the specified price $20.89!</p></li>
                    <li className="list_markers"><img className="list_markers_images" src="/images/number two.png" alt="n two"/><p>After the purchase - Send us your Order Number or the Screenshot to our manager in FB Messenger</p></li>
                    <li className="list_markers"><img className="list_markers_images" src="/images/number three.png" alt="n three"/><p>When you receive the product please use it and share product reviews</p></li>
                    <li className="list_markers"><img className="list_markers_images" src="/images/number four.png" alt="n four"/><p>We will send you the 25$ Amazon Gift Card code within 24 hours after we get short review from you.</p></li>
                    <li className="list_markers"><img className="list_markers_images" src="/images/gift.png" alt="gift"/><p>As a result, you will receive  our Product Free!</p></li>
                </ul>
                <div className="get_offer_block">
                    <button>Get Offer</button>
                    <p>I don't like offer terms</p>
                </div>
                
            </div>
            <img className="step_four__picture_giveaway picture_giveaway" src="/images/picture_giveaway_color 1.png" alt="bg_img"/>
          </div>
        );
        ReactDOM.render(element, document.querySelector('.content'));
  
        if (isVertical) {
          document.querySelector('.how_it_work').setAttribute('style','top: 875px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1315px');
        }
        else {
          document.querySelector('.how_it_work').setAttribute('style','top: 665px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1225px');
        };

        //document.querySelector('.step_bar').setAttribute('src','/images/v_step_four.png');
          
        break;
      case 5:
        console.log('Step Five: ', step);
        
        var element = (
          <div className="content__step_five step_five">
            <img className="step_five__step_bar step_bar" alt="step_5"/>
            <div className="step_five__info info">
                <h1>Step 5</h1>
                <h1>Buy and Provide order ID to our Manager</h1>
                <p>Click the button GO TO AMAZON and Buy a Product</p>
                <button className="amazon_button">Go to amazon <img src="/images/amazon_ico.png" alt="amazon_ico"/></button>
                <p>Click on the button below and Provide Order ID to our Manager in FB Messenger</p>
                <p>(If you have any questions, you can ask them to our Manager)</p>
                <button>provide order id</button>
            </div>
            <img className="step_five__picture_giveaway picture_giveaway" src="/images/picture_giveaway_color 1.png" alt="bg_img"/>
          </div>
        );
        ReactDOM.render(element, document.querySelector('.content'));
        
        if (isVertical) {
          document.querySelector('.how_it_work').setAttribute('style','top: 835px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1275px;');
        }
        else {
          document.querySelector('.how_it_work').setAttribute('style','top: 557px;');
          document.querySelector('.app__footer').setAttribute('style','top: 1137px;');
        };

        //document.querySelector('.step_bar').setAttribute('src','/images/v_step_five.png');
          
        break;
    }
  };

  ReadMoreFunction(e) {
    e.preventDefault();
    console.log('Read more');

    document.querySelector('.hidden_text').classList.toggle('text_show');
    document.querySelector('.read_more').classList.toggle('toggled');
    document.querySelector('.how_it_work').classList.toggle('text_show');
  };

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
      <div className="app__content content">
      <div className="content__main_page main_page">
            <div className="main_page_product product">
                <div className="product__gallery gallery">
                    <div className="image_selector">
                        <a><img className="img_arrows" src="/images/arrow_up.png" alt="arrow_up"/></a>
                        <img className="img_plates" src="/images/g_img_1.png" alt="img1"/>
                        <img className="img_plates" src="/images/g_img_2.png" alt="img2"/>
                        <img className="img_plates" src="/images/g_img_3.png" alt="img3"/>
                        <a><img className="img_arrows" src="/images/arrow_down.png" alt="arrow_down"/></a>
                    </div>
                    <img className="product_image" src="/images/g_img_1.png" alt="imgMain"/>
                </div>
                <div className="about_product">
                    <div className="product_top">
                        <h3>Best seller</h3>
                        <div className="product_rating">
                            <img className="rating_stars" src="/images/stars.png"/>
                            <p>(1731 reviews)</p>
                        </div>
                    </div>
                    <h2>Acne Treatment Cystic Acne heals, repairs & renews</h2>
                    <h3>Description:</h3>
                    <p className="description">Addictively refreshing gel-cream leaves skin plump, dewy, glowing.</p>

                    <button className="items">items left: 12</button>

                    <div className="buy_product">
                        <div className="product__prices">
                            <p className="price">us$25.89</p>
                            <h2 className="sells">$0.00 FREE</h2>
                        </div>
                        <button className="select_button">Select</button>
                        <img className="amazon_prime_logo" src="/images/amazon_prime_logo.png" alt="amazon_p_logo"/>
                    </div>
                </div>
            </div>
            <div className="product__overview overview">
                <h1>Overview</h1>
                <h3>Who It's For</h3>
                <p>Very Dry, Dry, Dry Combination Skin (Type 1, 2)</p>
                <h3>What It Is</h3>
                <p>Step 3 in our customized 3-Step Skincare System. Dermatologist-developed face moisturizer softens, smooths, improves. Leaves skin glowing.</p>
                <h3>What It Does</h3>
                <ul>
                    <li>Silky lotion delivers 8-hour hydration.</li>
                    <li>Slips on easily, absorbs quickly.</li>
                    <li>Helps strengthen skin’s own moisture barrier so more moisture stays in. Skin that holds onto moisture has a youthful-looking glow.</li>
                </ul>
                <a href="#" className="read_more not_toggled" onClick={(e) => {this.ReadMoreFunction(e)}}>Read more...</a>
                <div className="hidden_text text_hide">
                    <h3>Key Ingredients</h3>
                    <p>Sunflower Seed Cake, Barley Extract and Cucumber Fruit Extract help strengthen skin’s barrier, improve its resiliency, and balance and retain skin’s moisture levels. Hyaluronic acid acts as a natural moisture magnet/humectant.</p>
                    <div className="buy_product">
                        <div className="product__prices">
                            <p className="price">us$25.89</p>
                            <h2 className="sells">$0.00 FREE</h2>
                        </div>
                        <button className="select_button">Select</button>
                        <img className="amazon_prime_logo" src="/images/amazon_prime_logo.png" alt="amazon_p_logo"/>
                    </div>
                </div>
            </div>
        </div>
      </div>  
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
          <img className="how_it_work__rights rights_separators" src="/images/right.png" alt="right"/>
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
          <img className="how_it_work__rights rights_separators" src="/images/right.png" alt="right"/>
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