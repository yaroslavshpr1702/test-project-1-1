function MainContent() {
    return(
        <div className="app__content">
            
            <div className="app__content product">
                <div className="product__gallery">
                    <div className="image_selector">
                        <a><img className="img_arrows" src="/images/arrow_up.png" alt="arrow_up"/></a>
                        <img className="img_plates" src="/images/g_img_1.png" alt="img1"/>
                        <img className="img_plates" src="/images/g_img_2.png" alt="img2"/>
                        <img className="img_plates" src="/images/g_img_3.png" alt="img3"/>
                        <a><img className="img_arrows" src="/images/arrow_down.png" alt="arrow_down"/></a>
                    </div>
                    <img className="gallery product_image" src="/images/g_img_1.png" alt="imgMain"/>
                </div>
                <div className="product__description">
                    <h3>Best seller</h3>
                    <p>(1731 reviews)</p>
                    <h2>Acne Treatment Cystic Acne heals, repairs & renews</h2>
                    <h3>Description:</h3>
                    <p class="description">Addictively refreshing gel-cream leaves skin plump, dewy, glowing.</p>

                    <button className="product__description items">items left: 12</button>

                    <p>us$25.89</p><h2 className="new-price">$0.00 FREE</h2>
                    <button className="product__description select_button">Select</button>
                </div>
            </div>
            <div className="product_overview">
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
                <p className="read_more"><b>Read more...</b></p>
                <h3>Key Ingredients</h3>
                <p>Sunflower Seed Cake, Barley Extract and Cucumber Fruit Extract help strengthen skin’s barrier, improve its resiliency, and balance and retain skin’s moisture levels. Hyaluronic acid acts as a natural moisture magnet/humectant.</p>
            </div>
        </div>
    );
}

export default MainContent;