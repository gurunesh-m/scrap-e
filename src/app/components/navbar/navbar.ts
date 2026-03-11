import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar glass-card">
      <div class="logo-area">
        <img src="assets/logo.png" alt="ScrapHome Logo" class="logo-img" />
        <span class="logo-scrap">SCRAP</span>
      </div>
      
      <div class="nav-links-row">
        <a href="#hero" class="nav-link" (click)="scrollTo($event, 'hero')">Home</a>
        <a href="#services" class="nav-link" (click)="scrollTo($event, 'services')">Industry</a>
        <a href="#about" class="nav-link" (click)="scrollTo($event, 'about')">About</a>
      </div>


      <div class="nav-actions">
        <a href="tel:+919042737339" class="call-now-btn">
          <span class="call-icon">📞</span>
          <div class="call-content">
            <span class="call-label">Call Now</span>
            <span class="call-number">+91 9042737339</span>
          </div>
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      width: 95%;
      max-width: 1350px;
      padding: 10px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 1000;
      box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(46, 204, 113, 0.2);
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-img {
      width: 42px;
      height: 42px;
      object-fit: contain;
      border-radius: 10px;
    }

    .logo-scrap {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #1a8a4a, #2ecc71);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    }

    .nav-links-row {
      display: flex;
      gap: 8px;
    }

    .nav-link {
      text-decoration: none;
      color: var(--text-dim);
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      padding: 10px 16px;
      border-radius: 12px;
    }

    .nav-link:hover {
      color: var(--primary);
      background: rgba(39, 174, 96, 0.08);
    }

    .nav-actions {
      display: flex;
      align-items: center;
    }

    .call-now-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      padding: 8px 18px;
      border-radius: 16px;
      color: white;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 20px rgba(39, 174, 96, 0.25);
    }

    .call-now-btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 25px rgba(39, 174, 96, 0.35);
    }

    .call-icon {
      font-size: 1.4rem;
      background: rgba(255, 255, 255, 0.2);
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    .call-content {
      display: flex;
      flex-direction: column;
    }

    .call-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      opacity: 0.9;
    }

    .call-number {
      font-size: 0.95rem;
      font-weight: 800;
    }

    @media (max-width: 992px) {
        .nav-links-row { display: none; }
        .logo-scrap { font-size: 1.4rem; }
    }

    @media (max-width: 576px) {
        .navbar { padding: 8px 14px; }
        .call-number { display: none; }
        .call-content { justify-content: center; }
        .call-label { font-size: 0.8rem; }
    }
  `]
})
export class NavbarComponent {
  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
