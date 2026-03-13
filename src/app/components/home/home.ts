import { Component, ElementRef, ViewChild, OnDestroy, afterNextRender } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <!-- 3D Canvas Background -->
      <div id="canvas-container" #canvasContainer></div>

      <!-- ===== HERO SECTION ===== -->
      <section class="hero-section" id="hero">
        <div class="hero-container">
          <div class="hero-row">
            <div class="hero-text-content">
              <h1 class="hero-title animate-in">
                Clean Your <br> <span class="accent">Sweet Home & Industry</span>
              </h1>
              <p class="hero-quote animate-in-delay">
                "Sustainability is no longer about doing less harm. It's about doing more good."
              </p>
              <div class="quote-slider animate-in-more-delay">
                <div class="quote-card glass-card">
                  <p class="bold-quote">"Clean space, clear mind. We pick up your scrap, you pick up the peace."</p>
                </div>
              </div>
              
              <a href="#services" class="scroll-indicator animate-in-more-delay">
                <span class="scroll-arrow">↓</span>
                <span>Explore Our Services</span>
              </a>
            </div>

            <div class="hero-main-image-wrapper animate-in-delay">
              <img src="assets/hero.png" alt="ScrapHome - Professional scrap collection" class="hero-main-image" />
            </div>
          </div>
        </div>

        <!-- Floating Elements -->
        <div class="floater" style="top: 20%; left: 5%; font-size: 2.5rem;">📦</div>
        <div class="floater" style="top: 50%; left: 88%; font-size: 3rem;">♻️</div>
        <div class="floater" style="top: 12%; left: 65%; font-size: 2rem;">🚚</div>
        <div class="floater" style="top: 75%; left: 8%; font-size: 2.8rem;">🏠</div>
        <div class="floater" style="top: 35%; left: 95%; font-size: 2rem;">🔧</div>
        <div class="floater" style="top: 82%; left: 80%; font-size: 2.2rem;">🌿</div>
      </section>

      <!-- ===== SERVICES SECTION ===== -->
      <section class="services-section" id="services">
        <div class="services-container">
          <div class="services-split-layout">
            <div class="left-content">
              <div class="section-header">
                <span class="section-tag">What We Offer</span>
                <h2 class="section-title">Our <span class="accent">Eco-Services</span></h2>
                <div class="title-underline"></div>
              </div>

              <div class="services-grid">
                <div class="service-card glass-card" id="service-1">
                  <div class="service-icon-wrapper">
                    <div class="service-icon">📍</div>
                    <div class="icon-glow"></div>
                  </div>
                  <div class="service-content-wrapper">
                    <h3>Available for Coimbatore only</h3>
                    <p>Exclusively serving the Coimbatore region with dedicated local support.</p>
                  </div>
                </div>
                <div class="service-card glass-card" id="service-2">
                  <div class="service-icon-wrapper">
                    <div class="service-icon">🚚</div>
                    <div class="icon-glow"></div>
                  </div>
                  <div class="service-content-wrapper">
                    <h3>Door step pickup</h3>
                    <p>No need to travel. We come directly to your home at your convenience.</p>
                  </div>
                </div>
                <div class="service-card glass-card" id="service-3">
                  <div class="service-icon-wrapper">
                    <div class="service-icon">⚡</div>
                    <div class="icon-glow"></div>
                  </div>
                  <div class="service-content-wrapper">
                    <h3>Save your time</h3>
                    <p>Quick schedules and efficient collection process to value your time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="service-banner-container">
              <div class="service-banner">
                <img src="assets/service.png" alt="Doorstep scrap pickup service" class="service-banner-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== ABOUT SECTION ===== -->
      <section class="about-section" id="about">
        <div class="about-wrapper">
          <div class="about-visual">
            <div class="about-image-container">
              <img src="assets/about.png" alt="Sustainability and eco-friendly recycling" class="about-image" />
              <div class="orbit-ring ring-1"></div>
              <div class="orbit-ring ring-2"></div>
              <div class="orbit-ring ring-3"></div>
            </div>
          </div>
          <div class="about-content">
            <span class="section-tag">Who We Are</span>
            <h2 class="section-title">Building a <span class="accent">Zero-Waste</span> Future</h2>
            <div class="title-underline"></div>
            <p class="about-text">
              ScrapHome is a leading provider of professional scrap collection and management services.
              We believe in a zero-waste future and are committed to helping our customers reduce their environmental footprint.
            </p>
            <p class="about-text">
              Our team is passionate about the environment and works tirelessly to ensure that all materials collected
              are disposed of in a responsible and eco-friendly manner.
            </p>
            <div class="stats-row">
              <div class="stat-item">
                <span class="stat-number">10T+</span>
                <span class="stat-label">Collected</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">98%</span>
                <span class="stat-label">Happy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== NO CONTACT SECTION (Removed as per request) ===== -->


      <!-- ===== FOOTER WITH MAP ===== -->
      <footer class="footer" id="footer">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="assets/logo.png" alt="ScrapHome" class="footer-logo-img" />
            </div>
            <p class="footer-tagline">Turning waste into value. Building a sustainable tomorrow, today.</p>
          </div>
          <div class="footer-links-grid">
            <div class="footer-col">
              <h4>Quick Links</h4>
              <a href="#hero">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
            </div>
            <div class="footer-col">
              <h4>Services</h4>
              <a href="#services">Scrap Pickup</a>
              <a href="#services">E-Waste</a>
              <a href="#services">Metal Scrap</a>
              <a href="#services">Paper Scrap</a>
            </div>
          </div>
        </div>

        <!-- ===== NO MAP (Removed as per request) ===== -->


        <div class="footer-bottom">
          <p>&copy; 2026 ScrapHome. All rights reserved. Built with 💚 for the planet.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    /* =============== PAGE WRAPPER =============== */
    .page-wrapper {
      position: relative;
      width: 100%;
      overflow-x: hidden;
    }

    #canvas-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
      background: radial-gradient(ellipse at 30% 20%, #e8f5e9 0%, #f0f4f8 40%, #ffffff 100%);
    }

    /* =============== COMMON =============== */
    .accent { color: var(--primary); }

    .section-header {
      text-align: left;
      margin-bottom: 2rem;
      width: 100%;
    }

    .section-tag {
      display: inline-block;
      background: linear-gradient(135deg, rgba(39, 174, 96, 0.12), rgba(46, 204, 113, 0.08));
      color: var(--primary);
      font-weight: 600;
      font-size: 0.85rem;
      padding: 6px 18px;
      border-radius: 30px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      border: 1px solid rgba(39, 174, 96, 0.2);
    }

    .section-title {
      font-size: clamp(2rem, 5vw, 3rem);
      color: var(--text-main);
      margin-bottom: 0.25rem;
    }

    .title-underline {
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      border-radius: 4px;
      margin: 0.5rem 0 0;
    }

    .section-subtitle {
      color: var(--text-dim);
      font-size: 1.15rem;
      margin-top: 1rem;
    }

    /* =============== HERO SECTION =============== */
    .hero-section {
      position: relative;
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      padding: 100px 5% 50px;
    }

    .hero-container {
      max-width: 1250px;
      width: 100%;
      z-index: 10;
    }

    .hero-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      width: 100%;
    }

    .hero-text-content {
      flex: 1.2;
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .hero-main-image-wrapper {
      flex: 0.8;
      max-width: 500px;
      width: 100%;
      position: relative;
    }

    .hero-main-image {
      width: 100%;
      height: auto;
      border-radius: 30px;
      box-shadow: 0 30px 60px -12px rgba(39, 174, 96, 0.2);
      transition: transform 0.5s ease;
      border: 1px solid rgba(46, 204, 113, 0.1);
    }

    .hero-main-image:hover {
      transform: scale(1.02) translateY(-10px);
    }

    .hero-title {
      font-size: clamp(2.5rem, 6vw, 4.2rem);
      margin-bottom: 1.2rem;
      color: var(--text-main);
      line-height: 1.1;
      font-weight: 800;
      text-align: left;
      background: linear-gradient(135deg, var(--text-main) 30%, var(--primary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-quote {
      font-size: 1.1rem;
      color: var(--text-dim);
      margin-bottom: 1.2rem;
      font-style: italic;
      max-width: 550px;
      text-align: left;
    }

    .quote-card {
      padding: 20px 30px;
      max-width: 550px;
      margin: 0 0 1.5rem 0;
      border-radius: 24px;
      background: rgba(39, 174, 96, 0.1);
      border: 2px solid var(--primary);
      position: relative;
      overflow: hidden;
    }

    .bold-quote {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--primary);
      margin: 0;
      line-height: 1.4;
      text-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .quote-card::before {
      display: none;
    }

    .scroll-indicator {
      margin-top: 1rem;
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }

    .scroll-indicator:hover {
      transform: translateY(5px);
    }

    .scroll-arrow {
      font-size: 1.5rem;
      animation: bounce 2s ease infinite;
      margin-left: 10px;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(8px); }
    }

    .floater {
      position: absolute;
      pointer-events: none;
      animation: floatAnim 7s ease-in-out infinite;
      opacity: 0.2;
      filter: blur(1px);
      z-index: 5;
    }

    .floater:nth-child(2) { animation-duration: 9s; animation-delay: -1s; }
    .floater:nth-child(3) { animation-duration: 11s; animation-delay: -3s; }
    .floater:nth-child(4) { animation-duration: 8s; animation-delay: -2s; }
    .floater:nth-child(5) { animation-duration: 10s; animation-delay: -4s; }
    .floater:nth-child(6) { animation-duration: 6s; animation-delay: -1.5s; }

    @keyframes floatAnim {
      0% { transform: translateY(0) rotate(0deg) scale(1); }
      33% { transform: translateY(-25px) rotate(10deg) scale(1.05); }
      66% { transform: translateY(10px) rotate(-5deg) scale(0.95); }
      100% { transform: translateY(0) rotate(0deg) scale(1); }
    }

    /* =============== SERVICES SECTION =============== */
    .services-section {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 100px 5% 60px;
      background: linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%);
      backdrop-filter: blur(10px);
    }

    .services-container {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .services-split-layout {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 40px;
    }

    .left-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .service-banner-container {
      flex: 1.2;
      display: flex;
    }

    .service-banner {
      width: 100%;
      height: 100%;
      min-height: 400px;
      border-radius: 40px;
      overflow: hidden;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.12);
    }

    .service-banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s ease;
    }

    .service-banner:hover .service-banner-img {
      transform: scale(1.05);
    }

    .services-grid {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .service-card {
      padding: 20px 25px;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 20px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(46, 204, 113, 0.15);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
      border-radius: 24px;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(5px);
    }

    .service-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    .service-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 25px 50px rgba(39, 174, 96, 0.12);
      border-color: var(--primary);
    }

    .service-card:hover::after {
      transform: scaleX(1);
    }

    .service-icon-wrapper {
      position: relative;
      display: inline-block;
      flex-shrink: 0;
    }

    .service-icon {
      font-size: 2.5rem;
      position: relative;
      z-index: 2;
    }

    .icon-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(39, 174, 96, 0.15), transparent 70%);
      z-index: 1;
    }

    .service-card h3 {
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
      color: var(--text-main);
      font-weight: 700;
    }

    .service-card p {
      color: var(--text-dim);
      line-height: 1.6;
      font-size: 1rem;
      margin: 0;
    }

    .service-card:hover .service-icon {
      transform: scale(1.1) rotate(5deg);
      transition: transform 0.3s ease;
    }

    /* =============== ABOUT SECTION =============== */
    .about-section {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 100px 5% 60px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(232, 245, 233, 0.4) 50%, rgba(248, 250, 252, 0.95) 100%);
    }

    .about-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 40px;
      align-items: center;
    }

    @media (max-width: 768px) {
      .about-wrapper {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 20px;
      }
      .about-visual {
        order: -1;
      }
      .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .about-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .about-image-container {
      position: relative;
      width: 250px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .about-image {
      width: 200px;
      height: 200px;
      object-fit: contain;
      border-radius: 50%;
      z-index: 2;
      position: relative;
      animation: aboutPulse 6s ease-in-out infinite;
      box-shadow: 0 10px 40px rgba(39, 174, 96, 0.15);
    }

    @keyframes aboutPulse {
      0%, 100% { transform: scale(1); box-shadow: 0 10px 40px rgba(39, 174, 96, 0.15); }
      50% { transform: scale(1.04); box-shadow: 0 15px 50px rgba(39, 174, 96, 0.25); }
    }

    .orbit-ring {
      position: absolute;
      border: 2px dashed rgba(39, 174, 96, 0.15);
      border-radius: 50%;
      animation: orbitSpin 20s linear infinite;
    }

    .ring-1 { width: 140px; height: 140px; animation-duration: 15s; }
    .ring-2 { width: 180px; height: 180px; animation-duration: 22s; animation-direction: reverse; }
    .ring-3 { width: 220px; height: 220px; animation-duration: 30s; border-style: dotted; }

    @keyframes orbitSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .about-content .section-tag { display: inline-block; }
    .about-content .title-underline { margin: 0 0 1.5rem 0; }

    .about-text {
      font-size: 1.1rem;
      color: var(--text-dim);
      line-height: 1.9;
      margin-bottom: 1.5rem;
      font-weight: 300;
    }

    .stats-row {
      display: flex;
      gap: 20px;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(39, 174, 96, 0.15);
    }

    .stat-item {
      display: flex;
      flex-direction: column;
    }

    .stat-number {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--primary);
      letter-spacing: -1px;
    }

    .stat-label {
      font-size: 0.85rem;
      color: var(--text-dim);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @media (max-width: 600px) {
      .stats-row {
        justify-content: center;
        gap: 40px;
        width: 100%;
      }
    }

    /* =============== CONTACT SECTION =============== */
    .contact-section {
      position: relative;
      z-index: 1;
      padding: 8rem 5% 6rem;
      background: linear-gradient(180deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 28px 30px;
      text-decoration: none;
      color: inherit;
      border-radius: 20px;
      transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(46, 204, 113, 0.1);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    }

    .contact-card:hover {
      transform: translateY(-6px);
      background: rgba(46, 204, 113, 0.04);
      border-color: var(--primary);
      box-shadow: 0 15px 35px rgba(39, 174, 96, 0.12);
    }

    .contact-card:hover .card-arrow {
      transform: translateX(5px);
      color: var(--primary);
    }

    .contact-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
    }

    .contact-info {
      flex: 1;
    }

    .contact-info h3 {
      font-size: 1.15rem;
      margin-bottom: 4px;
      color: var(--primary);
      font-weight: 700;
    }

    .contact-info p {
      font-size: 1rem;
      color: var(--text-main);
      font-weight: 500;
    }

    .card-arrow {
      font-size: 1.5rem;
      color: var(--text-dim);
      transition: all 0.3s ease;
      flex-shrink: 0;
    }

    /* =============== FOOTER =============== */
    .footer {
      position: relative;
      z-index: 1;
      background: linear-gradient(180deg, #1a2e1a 0%, #0d1a0d 100%);
      color: #d4e6d4;
      padding: 0;
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      padding: 2rem 5% 1rem;
      max-width: 1200px;
      margin: 0 auto;
      flex-wrap: wrap;
    }

    .footer-brand {
      max-width: 350px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 1rem;
    }

    .footer-logo-img {
      width: 48px;
      height: 48px;
      object-fit: contain;
      border-radius: 8px;
    }

    .footer-logo-text {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: 2px;
      color: #fff;
    }

    .footer-tagline {
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.6);
    }

    .footer-links-grid {
      display: flex;
      gap: 60px;
    }

    @media (max-width: 600px) {
      .footer-links-grid {
        gap: 30px;
        width: 100%;
        justify-content: flex-start;
        flex-wrap: wrap;
      }
    }

    .footer-col h4 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
      color: #fff;
      letter-spacing: 0.5px;
    }

    .footer-col a {
      display: block;
      color: rgba(255, 255, 255, 0.55);
      text-decoration: none;
      margin-bottom: 10px;
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }

    .footer-col a:hover {
      color: var(--primary);
      transform: translateX(4px);
    }

    .footer-map {
      padding: 0 5% 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .map-title {
      font-size: 1.2rem;
      color: #fff;
      margin-bottom: 1.2rem;
      font-weight: 700;
    }

    .map-container {
      border-radius: 20px;
      overflow: hidden;
      border: 2px solid rgba(39, 174, 96, 0.25);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    .map-container iframe {
      display: block;
    }

    .footer-bottom {
      text-align: center;
      padding: 2rem 5%;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.4);
    }

    /* =============== ANIMATIONS =============== */
    .animate-in { animation: fadeInUp 1s ease forwards; }
    .animate-in-delay { animation: fadeInUp 1s ease 0.3s forwards; opacity: 0; }
    .animate-in-more-delay { animation: fadeInUp 1s ease 0.6s forwards; opacity: 0; }

    @keyframes fadeInUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* =============== RESPONSIVE =============== */
    @media (max-width: 992px) {
      .hero-row {
        flex-direction: column;
        text-align: center;
        gap: 40px;
      }
      .hero-text-content {
        align-items: center;
        text-align: center;
      }
      .hero-title {
        font-size: clamp(2rem, 8vw, 3.5rem);
      }
      .hero-quote, .quote-card {
        margin: 0 auto 1.5rem;
      }
      .scroll-indicator {
        align-items: center;
      }
    }

    @media (max-width: 600px) {
      .hero-section {
        padding-top: 120px;
      }
      .hero-title {
        font-size: 2rem;
      }
      .hero-main-image-wrapper {
        max-width: 280px;
      }
      .hero-quote, .quote-card {
        display: block;
        font-size: 0.9rem;
      }
      .bold-quote {
        font-size: 1.1rem;
      }
      .floater {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .hero-split {
        flex-direction: column;
        gap: 30px;
      }
      .hero-content {
        text-align: center;
      }
      .hero-image-wrapper {
        max-width: 300px;
      }
      .services-split-layout {
        flex-direction: column;
        gap: 20px;
      }
      .service-banner-container { transform: none; }
      .section-header { text-align: center; }
      .title-underline { margin: 0.5rem auto 0; }
      .service-banner { 
        height: 250px;
        min-height: 250px;
        border-radius: 20px;
      }
      .service-card {
        padding: 15px 20px;
      }
    }
  `]
})
export class HomeComponent implements OnDestroy {
  @ViewChild('canvasContainer') canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationId!: number;
  private particles!: THREE.Points;
  private recycleSymbols: THREE.Group[] = [];
  private clock = new THREE.Clock();
  private mouseX = 0;
  private mouseY = 0;
  private resizeHandler!: () => void;
  private mouseMoveHandler!: () => void;

  constructor() {
    afterNextRender(() => {
      this.initThree();
    });
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    if (this.mouseMoveHandler) {
      window.removeEventListener('mousemove', this.mouseMoveHandler as any);
    }
  }

  private initThree() {
    const container = this.canvasContainer.nativeElement;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xf0f4f8, 0.015);

    // Camera
    this.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.set(0, 2, 20);
    this.camera.lookAt(0, 0, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    container.appendChild(this.renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x27ae60, 3, 50);
    pointLight1.position.set(10, 10, 10);
    this.scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x2ecc71, 2, 50);
    pointLight2.position.set(-10, -5, 8);
    this.scene.add(pointLight2);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 10, 5);
    this.scene.add(directionalLight);

    // === PARTICLE FIELD ===
    this.createParticleField();

    // === FLOATING GEOMETRIC SHAPES ===
    this.createFloatingShapes();

    // === ORBITAL RINGS ===
    this.createOrbitalRings();

    // Mouse interaction
    this.mouseMoveHandler = ((event: MouseEvent) => {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }) as any;
    window.addEventListener('mousemove', this.mouseMoveHandler as any);

    // Animation
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      const elapsed = this.clock.getElapsedTime();

      // Animate particles
      if (this.particles) {
        this.particles.rotation.y = elapsed * 0.03;
        this.particles.rotation.x = Math.sin(elapsed * 0.05) * 0.1;
        const positions = this.particles.geometry.attributes['position'].array as Float32Array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += Math.sin(elapsed + i) * 0.002;
        }
        this.particles.geometry.attributes['position'].needsUpdate = true;
      }

      // Animate recycling shapes
      this.recycleSymbols.forEach((group, i) => {
        const speed = 0.3 + i * 0.1;
        const radius = 6 + i * 2;
        group.position.x = Math.cos(elapsed * speed + i * 1.2) * radius;
        group.position.y = Math.sin(elapsed * speed * 0.7 + i) * 3 + Math.sin(elapsed * 0.5) * 1;
        group.position.z = Math.sin(elapsed * speed + i * 1.2) * radius * 0.5;
        group.rotation.x = elapsed * 0.5;
        group.rotation.y = elapsed * 0.3;
        group.rotation.z = elapsed * 0.2;
      });

      // Camera subtle movement based on mouse
      this.camera.position.x += (this.mouseX * 3 - this.camera.position.x) * 0.02;
      this.camera.position.y += (this.mouseY * 2 + 2 - this.camera.position.y) * 0.02;
      this.camera.lookAt(0, 0, 0);

      this.renderer.render(this.scene, this.camera);
    };

    animate();

    // Resize handler
    this.resizeHandler = () => {
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', this.resizeHandler);
  }

  private createParticleField() {
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const green1 = new THREE.Color(0x27ae60);
    const green2 = new THREE.Color(0x2ecc71);
    const green3 = new THREE.Color(0x1abc9c);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const colorChoice = Math.random();
      const c = colorChoice < 0.33 ? green1 : colorChoice < 0.66 ? green2 : green3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private createFloatingShapes() {
    const shapes = [
      { geo: new THREE.IcosahedronGeometry(1, 0), color: 0x27ae60 },
      { geo: new THREE.OctahedronGeometry(0.8, 0), color: 0x2ecc71 },
      { geo: new THREE.TetrahedronGeometry(0.9, 0), color: 0x1abc9c },
      { geo: new THREE.DodecahedronGeometry(0.7, 0), color: 0x27ae60 },
      { geo: new THREE.IcosahedronGeometry(0.6, 1), color: 0x2ecc71 },
    ];

    shapes.forEach((shape, i) => {
      const group = new THREE.Group();

      // Solid mesh with transparency
      const solidMat = new THREE.MeshPhongMaterial({
        color: shape.color,
        transparent: true,
        opacity: 0.08,
        shininess: 100,
      });
      const solidMesh = new THREE.Mesh(shape.geo, solidMat);
      group.add(solidMesh);

      // Wireframe
      const wireMat = new THREE.MeshBasicMaterial({
        color: shape.color,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });
      const wireMesh = new THREE.Mesh(shape.geo, wireMat);
      group.add(wireMesh);

      // Edge glow
      const edges = new THREE.EdgesGeometry(shape.geo);
      const lineMat = new THREE.LineBasicMaterial({
        color: shape.color,
        transparent: true,
        opacity: 0.35,
      });
      const lineSegments = new THREE.LineSegments(edges, lineMat);
      group.add(lineSegments);

      group.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      );

      this.scene.add(group);
      this.recycleSymbols.push(group);
    });
  }

  private createOrbitalRings() {
    const ringRadii = [8, 12, 16];
    ringRadii.forEach((radius, i) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.4, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(128);
      const geometry = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, 0, p.y))
      );
      const material = new THREE.LineBasicMaterial({
        color: 0x27ae60,
        transparent: true,
        opacity: 0.06 + i * 0.02,
      });
      const ring = new THREE.Line(geometry, material);
      ring.rotation.x = Math.PI * 0.3 + i * 0.15;
      ring.rotation.z = i * 0.3;
      ring.position.y = -2 + i;
      this.scene.add(ring);
    });
  }
}
