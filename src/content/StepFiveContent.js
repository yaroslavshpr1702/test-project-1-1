function StepFiveContent() {
    return(
        <div className="app__step_five step_five">
            <img className="step_five__step_bar step_bar" src="/images/v_step_five.png" alt="step_5"/>
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
    )
}

export default StepFiveContent;