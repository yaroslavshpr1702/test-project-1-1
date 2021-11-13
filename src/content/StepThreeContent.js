function StepThreeContent() {
    return(
        <div className="app__step_three">
            <img className="app__step_three step" src="/images/v_step_three.png" alt="step_3"/>
            <div className="info">
                <h1>Step 3</h1>
                <h1>Amazon Prime</h1>
                <p>Do you have an Amazon Prime account?</p>
                <p>To be able to participate in this giveaway you need to have Amazon Prime.</p>
                <button className="accept_button">Yes, i have</button>
                <button className="disaccept_button">no, i don’t have</button>
            </div>
            <img src="/images/picture_giveaway_color 1.png" alt="bg_img"/>
        </div>
    )
}

export default StepThreeContent;