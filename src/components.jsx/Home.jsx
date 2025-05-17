import React, { useState } from "react";
import "../App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="hero">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="fade-in-left">
              Sell Unused Software Licenses Easily
            </h1>
            <p className="fade-in-left delay-1">
              Turn your unused licenses into cash in minutes!
            </p>
            <button className="fade-in-left delay-2">Get a Quote</button>
          </div>
          <div className="phone">
            <img src="image.png" alt="Phone mockup" />
          </div>
        </div>
      </div>

      <div className="whole">
        <div className="container">
          <section className="section">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <div className="icon">📤</div>
                <p>Upload License</p>
              </div>
              <div className="step">
                <div className="icon">💰</div>
                <p>Get Valuation</p>
              </div>
              <div className="step">
                <div className="icon">🏦</div>
                <p>Get Paid</p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="horizontal-cards">
              <div className="card">
                <div className="icon-circle">⚡</div>
                <h4>Fast Transactions</h4>
                <p>Sell your license in minutes with our quick system.</p>
              </div>
              <div className="card">
                <div className="icon-circle">🔒</div>
                <h4>Secure Process</h4>
                <p>End-to-end encrypted and fully transparent.</p>
              </div>
              <div className="card">
                <div className="icon-circle">📞</div>
                <h4>24/7 Support</h4>
                <p>Our team is always ready to help you.</p>
              </div>
              <div className="card">
                <div className="icon-circle">💸</div>
                <h4>Best Market Rates</h4>
                <p>We offer the most competitive prices in the market.</p>
              </div>
            </div>
          </section>

          <section className="section pricing-section">
            <h2 className="section-title">Pricing Plans</h2>
            <div className="horizontal-cards pricing-cards">
              <div className="card pricing-card">
                <h3>Basic</h3>
                <p className="price">
                  $29 <span>/ license</span>
                </p>
                <ul>
                  <li>Upload up to 5 licenses</li>
                  <li>Email Support</li>
                  <li>License Valuation</li>
                </ul>
                <button>Choose Plan</button>
              </div>
              <div className="card pricing-card popular">
                <h3>Pro</h3>
                <p className="price">
                  $59 <span>/ license</span>
                </p>
                <ul>
                  <li>Upload up to 20 licenses</li>
                  <li>Priority Support</li>
                  <li>Advanced Valuation Tools</li>
                  <li>Dashboard Access</li>
                </ul>
                <button>Choose Plan</button>
              </div>
              <div className="card pricing-card">
                <h3>Enterprise</h3>
                <p className="price">Contact Us</p>
                <ul>
                  <li>Unlimited Licenses</li>
                  <li>Dedicated Account Manager</li>
                  <li>Custom Integrations</li>
                  <li>24/7 Support</li>
                </ul>
                <button>Contact Sales</button>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="horizontal-cards">
              <div className="card testimonial">
                <p>"This was the smoothest sale ever!"</p>
                <span>- Aditi, Software Analyst, CodeCraft</span>
              </div>
              <div className="card testimonial">
                <p>"Highly recommend — fast and fair!"</p>
                <span>- Ramesh, IT Head, SoftLink Inc.</span>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Contact Us</h2>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Company" required />
              <select required>
                <option value="">Select License Type</option>
                <option value="antivirus">Antivirus</option>
                <option value="devtools">Developer Tools</option>
                <option value="design">Design Software</option>
              </select>
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
