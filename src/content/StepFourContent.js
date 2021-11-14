function StepFourContent() {
    return(
        <div className="app__step_four step_four">
            <img className="step_four__step_bar step_bar" src="/images/v_step_four.png" alt="step_4"/>
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
    )
}

export default StepFourContent;