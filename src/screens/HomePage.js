
import React from 'react';
import "./homePage.css";
import Women from "../photo/women.png"
import review from "../photo/girl.mp4";
import review1 from "../photo/girl1.mp4";
import review2 from "../photo/girl2.mp4";

export default function HomePage() {
  return (
    <>
      <section class="home" id="home">
      <div class="home1">

      <div class="container">
      <h2>Women Fashion Theme</h2>
      <p>Complete Women Fashion Hear<br/>Wear the Best</p>
      <a href="/login" class="btn">Start Shopping</a>

      </div>
      <div class="image">
      <img src="https://img.freepik.com/free-vector/fashion-blogger-review-video-fashionable-purchase-clothes-hanger-fashion-blog-shopping-blogging-fashion-blogger-job-concept-pinkish-coral-bluevector-isolated-illustration_335657-1279.jpg"/>
      
      </div>
      </div>


      </section>
      <section class="about" id="about">
      <h2 class="aheading">About us</h2>
      

      <div class="row">
        <div class="home2">

          <div class="image">
            <img src="https://thumbs.dreamstime.com/b/beauty-fashion-model-girl-wearing-stylish-sunglasses-brown-hair-76060635.jpg"/>

          </div>
          <div class="content">
          <h2>Building <img src="https://img.icons8.com/emoji/48/000000/heart-suit.png"/>a better you</h2>
            {/* <h1>Building <img src="https://img.icons8.com/emoji/48/000000/heart-suit.png"/>a better you.</h1> */}
            <p>Anyone can beat you,but no one can beat your outfit<br/> as long as you wear ecstasy outfits.</p>
            <a href="/login" class="btn">Order Now</a>
          </div>
          
        </div>
        <div class="icon_container">
          <div class="icon">
          <i class="fas fa-shipping-fast"></i>
          <span>Free Delivery</span>
          </div>
          <div class="icon">
          <i class="fas fa-headset"></i>
          <span>24/7 Free Services</span>
          </div>
          <div class="icon">
          <i class="fas fa-dollar-sign"></i>
          <span>Simple Payments</span>
          </div>
          <div class="icon">
          <i class="fa fa-thumbs-up"></i>
          <span>Best Quality</span>
          </div>
          
          
        </div>

      </div>

      </section>
      <br/>
      <div class="step_container">
        <h3>Get the Cutest Dresses online</h3>
      </div>
        <section class="steps">
            <div class="box">
              
                <a href='/login' class="imgs">

                <img src="https://www.fashionkafatka.com/media/catalog/product/cache/e8c71cfd9ecd4c4ef3de8b4a7a1446f5/9/4/94603ef5-9e11-4be1-b52a-fc4ef4c10da7.jpg"/>
                <h3>New Arrivels</h3>
                </a>
            </div>
            <div class="box">
              <a href='/login' class="imgs">

                  <img src="https://i.pinimg.com/originals/87/05/59/87055985d07f3199143f8b1c2b43759e.jpg"/>
                      <h3>Modern Outfit</h3>
              </a>
            </div>
            <div class="box">
              <a href='/login' class="imgs">

                  <img src="http://cdn.shopify.com/s/files/1/0523/7753/articles/Swirly_Sassy_Cotton_Tiered_Long_Dress_1200x1200.jpg?v=1525773581"/>
                  
                      <h3>Traditional Outfit</h3>
              </a>
            </div>

        
        
        </section>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <section class="review" id="review">
        <h3>Our Customers Reviews</h3>
        <br/>
        <div class="box-container">
        <div class="box">
              <iframe src={review} type="video.mp4" />
              <h3 class="review_heading">Sharmi</h3>
              
              <div class="stars">
              <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="far fa-star" style={{ color: "orange"}}></i>
              </div>
              <p>Good service!! Keep up the good work!</p>

        </div>
        <div class="box">
              <iframe src={review1} type="video.mp4" />
              <h3 class="review_heading">Aalia</h3>
              
              <div class="stars">
              <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="far fa-star" style={{ color: "orange"}}></i>
              </div>
              <p>The dress looks as pictured. Good color and material quality!<br/> I was so relieved it arrived on time too ! </p>

        </div>
        <div class="box">
              <iframe src={review2} type="video.mp4" />
              <h3 class="review_heading">Fathima</h3>
              
              <div class="stars">
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="fas fa-star" style={{ color: "orange"}}></i>
                  <i class="far fa-star" style={{ color: "orange"}}></i>
              </div>
              <p>Product is good quality, exactly as shown in picture.<br/> Will recommend for sure! </p>

        </div>

        </div>

        </section>
        <br/>
        <section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>Shop Locations</h3>
            <a href="#">Bangalore</a>
            <a href="#">Chennai</a>
            <a href="#">Salem</a>
            <a href="#">Erode</a>
            
        </div>

        <div class="box">
            <h3>ShortCuts</h3>
            <a href="/home">home</a>
            <a href="/login">login</a>
            <a href="/cart">cart</a>
         
        </div>

        <div class="box">
            <h3>Contact us</h3>
            
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pavithradeevi@gmail.com">Admin-gmail</a>
            <a href="https://www.linkedin.com/in/pavithra-v-148533263/">LinkedIn:Pavithra</a>
            <a href="https://github.com/pavithradeevi">Github : Pavithra</a>
            <a href="https://en.wikipedia.org/wiki/Bangalore">Bangalore - 560094</a>
        </div>

        {/* <div class="box">
            <h3>Follow us</h3>
            <a href="https://github.com/pavithradeevi">Github</a>
        </div> */}

    </div>

    <div class="credit"> <p>© Copyright 2023</p></div>

</section>
        
    </>
  )
}
