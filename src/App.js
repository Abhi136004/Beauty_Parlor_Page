import React from 'react';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>ABC</h1>
        <div className="items">
          <div className="items style home"><a href=""><h3>Home</h3></a></div>
          <div className="items elite"><a href=""><h3>Elite</h3></a></div>
          <div className="items luxe"><a href=""><h3>Luxe</h3></a></div>
          <div className="items hair"><a href=""><h3>Hair Spa's</h3></a></div>
          <div className="items search">
            <select className="city">
              <option value="">Nungambakam, chennai</option>
              <option value="">Guindy,chennai</option>
              <option value="">Anna Nagar, chennai</option>
            </select>
          </div>
          <div className="items search">
            <input
              type="text"
              placeholder="Search Area"
              style={{
                backgroundImage: "url('https://www.freeiconspng.com/uploads/search-icon-png-21.png')",
                backgroundSize: '20px 20px',
                backgroundPosition: '200px center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
          <div className="items style login"><a href=""><h3>login</h3></a></div>
          <div className="items signup"><a href=""><h3>Sign Up</h3></a></div>
        </div>
      </header>

      <section>
        <div className="book-service">
          <div className="part1">
            <button onClick={() => {}}className="subscribe">Subscribe</button>
            <h2>Book Your <br />Service</h2>
            <div className="logo">
              <img src="/images/elite.png" alt="elite" />
              <img src="/images/luxe.png" alt="luxe" />
            </div>
          </div>
          <div className="part2">
            <img src="/images/images.png" alt="booking" />
          </div>
          <div className="part3">
            <img src="/images/3.png" alt="style" />
          </div>
          <div className="part4">
            <img src="/images/2.png" alt="style2" />
          </div>
        </div>

        <div className="book-now">
          <div className="part1">
            <h2>Your Best Value <img src="/images/elite.png" alt="elite" className="logo-img" /> Pack</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className="part2">
            <img src="/images/book1.png" alt="booking" />
          </div>
        </div>

        <div className="package">
          <h2 className="package-title">Your Best Value Pack For Women</h2>
          <div className="scroll-container">
            {[1, 2, 3, 4, 5].map((id) => (
              <div className="card" key={id}>
                <div className="img">
                  <img src={`/images/pack${id}.png`} alt={`pack${id}`} />
                </div>
                <div className="content">
                  <h2>Category:</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <button onClick={() => {}}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="best-service">
          <div className="service-card">
            <div className="part1">The Best Service Provider's to the Customers</div>
            <div className="part2">
              <img src="/images/best-service.png" alt="best-service" />
            </div>
            <div className="part3">
              <h3>Category</h3>
              <p>Keys to writing copy that actually converts and sells users </p>
              <p>Author name</p>
            </div>
            <div className="part4">
              <h3>Category</h3>
              <p>Keys to writing copy that actually converts and sells users </p>
              <p>Author name</p>
            </div>
          </div>
        </div>
        <div className="book-now">
          <div className="part1">
            <h2>Your Best Value <img src="/images/luxe.png" alt="elite" className="logo-img" /> Pack</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className="part2">
            <img src="/images/book-now.png" alt="booking" />
          </div>
        </div>
      </section>
      <section>
        <div className="best-value">
          <div>
            <h2 className="value-heading">Your Best Value Services</h2>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="playstore-button"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>
          </div>
          <p className="value-subtext">
            “If you don’t try this app, you won’t become the superhero you were meant to be”
          </p>
          <div className="value-cards">
            <div className="cards">
              <img src="/images/pack4.png" alt="feature 1" />
              <h2>Special Features</h2>
              <h3>Rs. XXXX</h3>
              <h4><a href="#">View Details</a></h4>
            </div>
            <div className="cards">
              <img src="/images/pack5.png" alt="feature 2" />
              <h2>Special Features</h2>
              <h3>Rs. XXXX</h3>
              <h4><a href="#">View Details</a></h4>
            </div>
            <div className="cards">
              <img src="/images/pack1.png" alt="feature 3" />
              <h2>Special Features</h2>
              <h3>Rs. XXXX</h3>
              <h4><a href="#">View Details</a></h4>
            </div>
            <div className="cards">
              <img src="/images/pack2.png" alt="feature 4" />
              <h2>Special Features</h2>
              <h3>Rs. XXXX</h3>
              <h4><a href="#">View Details</a></h4>
            </div>
            <div className="cards">
              <img src="/images/pack3.png" alt="feature 5" />
              <h2>Special Features</h2>
              <h3>Rs. XXXX</h3>
              <h4><a href="#">View Details</a></h4>
            </div>
          </div>
        </div>
      </section>
      <section
      className="product"
      style={{ backgroundColor: '#FFF0F5' }}
    >
      <div className="customers">
        <div
          className="one"
          style={{
            backgroundColor: '#FF69B4',
            borderRadius: '10px',
          }}
        >
          <img
            src="./images/3.png"
            height="350"
            width="300"
            alt="Product"
          />
          <p
            style={{
              fontWeight: 500,
              fontSize: 'xx-large',
              paddingTop: '80px',
            }}
          >
            The best Product <br />
            provider to the <br />
            customers
          </p>
          <button onClick={() => {}} style={{ backgroundColor: 'white',}}> Explore Now</button>
        </div>

        <div className="two" style={{ backgroundColor: 'white' }}>
          <p
            style={{
              color: '#FF69B4',
              fontWeight: 500,
              fontSize: '1.5rem',
            }}
          >
            Keys to writing copy that actually converts and sells users
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore..
          </p>
        </div>

        <div className="three" style={{ backgroundColor: 'white' }}>
          <p
            style={{
              color: '#FF69B4',
              fontWeight: 500,
              fontSize: '1.5rem',
            }}
          >
            Keys to writing copy that actually converts and sells users
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore..
          </p>
        </div>
      </div>
    </section>

<section>
  <div className="achivements-celebrities">
    <div className="achieve">
      <img src="./images/2.png" height="800" />
    </div>
    <div className="act">
      <h3>Achivements</h3>
      <div className="achivements">
        <div>
          <img src="./images/symbol.png" height="75" width="75" />
          <p>5+years <br />Experience</p>
        </div>
        <div>
          <img src="./images/symbol.png" height="75" width="75" />
          <p>500+ <br />Bookings</p>
        </div>
        <div>
          <img src="./images/symbol.png" height="75" width="75" />
          <p>500+ <br />Happy Customers</p>
        </div>
        <div>
          <img src="./images/symbol.png" height="75" width="75" />
          <p>⭐ 4.5 <br />Rating</p>
        </div>
        <div>
          <img src="./images/symbol.png" height="75" width="75" />
          <p>1M<br />App Downloaded</p>
        </div>
      </div>

      <h3>Celebrities Loves Us</h3>
      <div className="celebrities">
        <div>
          <img src="./images/celebrity1.png" height="250" width="170" />
        </div>
        <div>
          <img src="./images/celebrity2.png" height="250" width="170" />
        </div>
        <div>
          <img src="./images/celebrity3.png" height="250" width="170" />
        </div>
        <div>
          <img src="./images/celebrity4.png" height="250" width="170" />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="service" style={{ backgroundColor: "#FFF0F5" }}>
  <div>
    <div className="service-item1">
      <h2>Ready to get Our Service ?</h2>
      <p style={{ fontWeight: 400, fontSize: "x-large", paddingLeft: "0px" }}>
        Sign Up or Contact Us
      </p>
    </div>
    <div className="service-item2">
      <button onClick={() => {}} style={{ backgroundColor: "rgb(253, 228, 237)" }}>Book Now</button>
      <button onClick={() => {}} style={{ backgroundColor: "#FF69B4", color: "white" }}>
        Contact Us
      </button>
    </div>
  </div>
</section>

<section className="media" style={{ backgroundColor: "#FFC0CB" }}>
  <div className="media-section">
    <div className="media-heading">
      <img src="./images/mediacoverages.png" alt="mic" />
    </div>

    <div className="media-grid">
      <div className="media-card">
        <img
          src="./images/mediacoverage1.png"
          className="coverage-1"
          alt="ET Retail Cover"
        />
      </div>
      <div className="media-card">
        <img
          src="./images/mediacoverage2.png"
          className="coverage-2"
          alt="Inc42 Cover 1"
        />
      </div>
      <div className="media-card">
        <img
          src="./images/mediacoverage2.png"
          className="coverage-3"
          alt="Inc42 Cover 2"
        />
      </div>
    </div>
  </div>
</section>
<section className="trusted-partners" style={{ backgroundColor: "#FFF0F5" }}>
  <p>Trusted Partners</p>
  <div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</section>

<section className="download">
  <div className="setting-account">
    <div className="setting-account-img">
      <img src="./images/settingup.jpg" alt="settingup" />
    </div>
    <div className="setting-account-ways">
      <p style={{ fontSize: "3rem", fontWeight: 400 }}>Get The ABC App</p>
      <img src="./images/symbol.png" alt="symbol" />
      <div>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="playstores-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="playstores" alt="Get it on Google Play" height="200" width="200" / >
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"className="appstore-button">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="appstore" alt="Download on the App Store" height="200" width="190"/>
        </a>
      </div>
    </div>
  </div>
</section>
 <footer>
        <div className="footer-container">
          <div class="products">
            <h2>Products</h2>
            <ul>
              <li><a href="">ELITE</a></li>
              <li><a href="">LUXE</a></li>
              <li><a href="">Spa's</a></li>
            </ul>
          </div>
          <div class="resources">
            <h2>Resources</h2>
            <ul>
              <li><a href="">Community</a></li>
              <li><a href="">Help</a></li>
              <li><a href="">Experts</a></li>
              <li><a href="">Guides</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Resources</a></li>
            </ul>
          </div>
          <div class="company">
            <h2>Company</h2>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms Of Use</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Refund & Cancellation Policy</a></li>
              <li><a href="">Join as a Professional</a></li>
              <li><a href="">Franchies</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Refer & Erase</a></li>
            </ul>
          </div>
          <div class="Social">
            <h2>Social</h2>
            <ul>
              <li><a href="">LinkedIn</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="copy-rights">&copy; 2025 Beauty Parlor. All rights reserved.</div>
      </footer>
    </div >
  );
};

export default App;
