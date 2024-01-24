import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    {/* ======= Header ======= */}
<header id="header" className="fixed-top d-flex align-items-center">
  <div className="container d-flex align-items-center">
    <div className="logo me-auto">
      <h1><a href="index.html">ENERGY-TRADE</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
    </div>
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About Us</a></li>
        <li><a className="nav-link scrollto" href="#services">Services</a></li>
        <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
        <li><a className="nav-link scrollto" href="#team">Team</a></li>
        
        <li><a className="nav-link scrollto" href="#contact">Contact Us</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
  </div>
</header>{/* End #header */}

<div>
  {/* ======= Hero Section ======= */}
  <section id="hero">
    <div className="hero-container">
      <h1>Welcome to Energy Trade</h1>
      <h2></h2>
      {/* <a href="./Form.js" className="btn-get-started scrollto">SIGH-IN</a> */}
      <div class="header-right">
      <Link to="/form" className="btn-get-started scrollto">SIGN UP</Link>
      <Link to="/signin" className="btn-get-started scrollto">SIGN-IN</Link>
      </div>
    </div>
  </section>{/* #hero */}
  <main id="main">
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2><b>About Us</b></h2>
        </div>
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            <img src="assets/img/about-img.jpeg" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
            <h5>Welcome to our Energy Trading Website! We are a cutting-edge platform that leverages the power of blockchain technology to revolutionize the energy trading industry. Our mission is to provide a secure, transparent,
                 and efficient marketplace for energy producers, consumers, and traders.</h5>
                 <h2>Our Vision</h2>
            <p className="fst-italic">
            At Energy Trading Website, we envision a future where energy trading is decentralized, trustworthy, and accessible to all. We believe that blockchain technology has the potential to transform the way energy is bought,
             sold, and distributed, leading to a more sustainable and equitable energy ecosystem.
            </p>
            <ul>
              <li><i className="bi bi-check2-circle" /> Secure and Immutable Transactions: Through the power of blockchain, every energy transaction is recorded on a transparent and tamper-proof ledger, 
              ensuring trust and security for all participants.</li>
              <li><i className="bi bi-check2-circle" /> Efficient Energy Trading: Our advanced trading algorithms and smart contracts enable seamless and efficient energy trading,
               eliminating intermediaries and reducing transaction costs.</li>
              <li><i className="bi bi-check2-circle" /> Marketplace for Producers and Consumers: We provide a marketplace where energy producers can sell excess energy directly to consumers,
               fostering a more direct and efficient energy supply chain.</li>
            </ul>
            <p>
             We are committed to promoting sustainable energy practices and supporting the transition to renewable energy sources.
             Our platform encourages the trading of renewable energy certificates and facilitates the integration of clean energy into the grid.
        
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Services</h2>
      <p>"We are dedicated to revolutionizing the energy industry and providing sustainable solutions for a greener future."</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 icon-box">
        <div className="icon"><i className="bi bi-lightning"></i></div>
        <h4 className="title"><a href="#">Buy Energy</a></h4>
        <p className="description">Invest in renewable energy and purchase clean energy sources to power your business.</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box">
        <div className="icon"><i className="bi bi-cart-plus"></i></div>
        <h4 className="title"><a href="#">Sell Energy</a></h4>
        <p className="description">Monetize your excess energy production by selling it back to the grid or other users.</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box">
        <div className="icon"><i className="bi bi-cpu"></i></div>
        <h4 className="title"><a href="#">Blockchain</a></h4>
        <p className="description">Leverage the power of blockchain technology for secure and transparent energy transactions.</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box">
        <div className="icon"><i className="bi bi-eye"></i></div>
        <h4 className="title"><a href="#">Transparency</a></h4>
        <p className="description">Gain visibility into the energy market, prices, and transactions for informed decision-making.</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box">
        <div className="icon"><i className="bi bi-shield-fill-check"></i></div>
        <h4 className="title"><a href="#">Decentralized</a></h4>
        <p className="description">Ensure decentralized energy distribution and eliminate reliance on central authorities.</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box">
        <div className="icon"><i className="bi bi-lock-fill"></i></div>
        <h4 className="title"><a href="#">Security</a></h4>
        <p className="description">Protect your energy transactions and data with robust security measures.</p>
      </div>
    </div>
  </div>
</section>

    {/* ======= Call To Action Section ======= */}
<section className="call-to-action">
  <div className="container">
    <div className="text-center">
      <h3>Start Trading Energy Today</h3>
      <p>Join our platform to buy and sell energy efficiently, leverage blockchain technology for secure transactions, and experience a new era of transparency and decentralization.</p>
      <a className="cta-btn" href="#">Get Started</a>
    </div>
  </div>
</section>
{/* End Call To Action Section */}

    {/* ======= Our Portfolio Section ======= */}
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>INSIGHTS</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* <ul id="portfolio-flters"> */}
              {/* <li data-filter="*" className="filter-active">All</li> */}
              {/* <li data-filter=".filter-app">App</li> */}
              {/* <li data-filter=".filter-card">Card</li> */}
              {/* <li data-filter=".filter-web">Web</li> */}
            {/* </ul> */}
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">App 1</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">Web 3</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2">App 2</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.png" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-4.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2">Card 2</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-4.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-5.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2">Web 2</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-5.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3">App 3</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-7.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1">Card 1</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-7.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3">Card 3</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h3><a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1">Web 1</a></h3>
                <div>
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="Details"><i className="bi bi-link" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Our Portfolio Section */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Frequently Asked Questions</h2>
    </div>
    <ul className="faq-list">
      <li>
        <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">What is energy trading and how does it work? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
        <div id="faq1" className="collapse" data-bs-parent=".faq-list">
          <p>
            Energy trading involves buying and selling energy commodities, such as electricity, natural gas, or renewable energy certificates. It enables market participants to manage risks, optimize supply and demand, and benefit from price fluctuations in the energy markets. Traders analyze market trends, supply and demand factors, and regulatory policies to make informed trading decisions.
          </p>
        </div>
      </li>
      <li>
        <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">What are the benefits of participating in energy trading? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
        <div id="faq2" className="collapse" data-bs-parent=".faq-list">
          <p>
            Energy trading offers several benefits, including: 
            <ul>
              <li>Opportunities for profit through buying low and selling high.</li>
              <li>Risk management and hedging against price volatility.</li>
              <li>Market liquidity and efficient price discovery.</li>
              <li>Support for renewable energy integration and sustainability goals.</li>
              <li>Diversification of energy portfolio and revenue streams.</li>
            </ul>
          </p>
        </div>
      </li>
      <li>
        <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Who can participate in energy trading? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
        <div id="faq3" className="collapse" data-bs-parent=".faq-list">
          <p>
            Various entities can participate in energy trading, including:
            <ul>
              <li>Energy producers and generators.</li>
              <li>Electricity retailers and suppliers.</li>
              <li>Utility companies and grid operators.</li>
              <li>Renewable energy developers and investors.</li>
              <li>Financial institutions and energy trading firms.</li>
            </ul>
          </p>
        </div>
      </li>
      <li>
        <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">How is renewable energy integrated into energy trading? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
        <div id="faq4" className="collapse" data-bs-parent=".faq-list">
          <p>
            Renewable energy is integrated into energy trading through mechanisms like Renewable Energy Certificates (RECs) or Power Purchase Agreements (PPAs). RECs represent the environmental attributes of renewable energy generation and can be traded separately from the physical electricity. PPAs involve long-term contracts for buying or selling renewable energy at pre-determined prices. These mechanisms incentivize renewable energy development and provide opportunities for trading renewable energy assets.
          </p>
        </div>
      </li>
      </ul>
      </div>
    </section>

    {/* ======= Our Team Section ======= */}
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>Our team is composed of dedicated individuals who are passionate about energy trading and committed to delivering exceptional results. Each team member brings their unique expertise and skills to the table, contributing to our collective success.</p>
    
    
        </div>
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="member">
              <img src="assets/img/team/team-1.jpg" alt />
              <h4>AMISHA S POOJARY</h4>
              <span></span>
              <p>We believe in the power of collaboration and teamwork. By working together, we analyze market trends, develop trading strategies, and manage risks effectively. We stay updated on the latest industry developments and
                 employ innovative technologies to make informed decisions.</p>
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="member">
              <img src="assets/img/team/team-2.jpg" alt />
              <h4>ANANYA HEBBAR</h4>
              <span></span>
              <p>At our core, we value professionalism, integrity, and continuous learning. We are here to provide comprehensive energy trading services, tailored to meet the specific needs of our clients. 
                Our team is dedicated to helping our clients succeed in the ever-evolving energy markets.</p>
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="member">
              <img src="assets/img/team/team-3.jpg" alt />
              <h4>ANIRUDH BHARADWAJ</h4>
              <span></span>
              <p>We foster a collaborative and inclusive work environment, where every team member's voice is heard and valued. We encourage open communication and actively seek diverse perspectives to drive innovation and creativity in our energy trading strategies. Our team regularly participates in industry conferences, workshops, and training programs to stay at the forefront of the energy market landscape.</p>

              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Our Team Section */}
    {/* ======= Contact Us Section ======= */}
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>We are a leading energy trading company specializing in renewable energy sources. Our team of experts is dedicated to providing sustainable energy solutions for businesses and individuals alike. Whether you have questions about our services, want to explore partnership opportunities, or simply need more information, feel free to reach out to us.</p>
</div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-about">
              <h3>ENERGY-TRADING</h3>
              <p>We foster a collaborative and inclusive work environment, where every team member's voice is heard and valued. We encourage open communication and actively seek diverse perspectives to drive innovation and creativity in our energy trading strategies. Our team regularly participates in industry conferences, workshops, and training programs to stay at the forefront of the energy market landscape.</p>

              <div className="social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info">
              <div>
                <i className="bi bi-geo-alt" />
                <p>A108 Adam Street<br />BENGSLORE</p>
              </div>
              <div>
                <i className="bi bi-envelope" />
                <p>info@example.com</p>
              </div>
              <div>
                <i className="bi bi-phone" />
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group mt-3">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>{/* End Contact Us Section */}
    {/* ======= Map Section ======= */}
    <section className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg" frameBorder={0} style={{border: 0}} allowFullScreen />
    </section>{/* End Map Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="container">
      <div className="copyright">
       <strong><span></span></strong>
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-one-page-bootstrap-template-amoeba/ */}
        <a href="https://bootstrapmade.com/"></a>
      </div>
    </div>
  </footer>{/* End #footer */}
</div>

    </div>
  )
}

export default Header
