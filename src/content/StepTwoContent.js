function StepTwoContent() {
    return(
        <div className="app__step_two step_two step_two_hidden">
            <img className="step_two__step_bar step_bar" src="/images/v_step_two.png" alt="step_2"/>
            <div className="step_two__info info">
                <h1>Step 2</h1>
                <h1>Share Facebook post</h1>
                <p>To participate in this giveaway please share this giveaway offer with your friends. Not only your friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of your friends that participates in this giveaway!</p>
                <button>continue</button>
            </div>
            <img className="step_two__facebook_post facebook_post" src="/images/facebook_post.png" alt="bg_img"/>
            <img className="step_two__press_here_block press_here_block" src="/images/press_here_block.png" alt="press_here_block_img"/>
        </div>
    )
}

export default StepTwoContent;