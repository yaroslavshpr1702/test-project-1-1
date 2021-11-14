function StepOneContent() {
    return(
        <div className="app__step_one step_one">
            <img className="step_one__step_bar step_bar" src="/images/v_step_one.png" alt="step_1"/>
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
}

export default StepOneContent;