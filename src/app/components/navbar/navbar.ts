import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <nav class="navbar glass-card" [class.menu-open]="isMenuOpen()">
      <div class="navbar-main">
        <div class="logo-area" routerLink="/" style="cursor: pointer;" (click)="closeMenu()">
          <img src="assets/logo.png" alt="ScrapHome Logo" class="logo-img" />
          <span class="logo-scrap">SCRAP</span>
        </div>
        
        <div class="nav-links-row desktop-only">
          <a routerLink="/" fragment="hero" class="nav-link">Home</a>
          <a routerLink="/" fragment="services" class="nav-link">Industry</a>
          <a routerLink="/" fragment="about" class="nav-link">About</a>
          <a routerLink="/contact" class="nav-link">Contact</a>
        </div>

        <div class="nav-actions">
          <a href="tel:+919042737339" class="call-now-btn">
            <span class="call-icon">📞</span>
            <div class="call-content hide-mobile">
              <span class="call-label">Call Now</span>
              <span class="call-number">+91 9042737339</span>
            </div>
            <span class="call-label show-mobile-only">Call</span>
          </a>

          <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
            <div class="hamburger" [class.active]="isMenuOpen()">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-menu" [class.active]="isMenuOpen()">
        <div class="mobile-nav-links">
          <a routerLink="/" fragment="hero" class="mobile-nav-link" (click)="closeMenu()">Home</a>
          <a routerLink="/" fragment="services" class="mobile-nav-link" (click)="closeMenu()">Industry</a>
          <a routerLink="/" fragment="about" class="mobile-nav-link" (click)="closeMenu()">About</a>
          <a routerLink="/contact" class="mobile-nav-link" (click)="closeMenu()">Contact</a>
        </div>
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
      z-index: 1000;
      box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(46, 204, 113, 0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      max-height: 80px;
    }

    .navbar.menu-open {
      max-height: 400px;
      background: rgba(255, 255, 255, 0.98);
    }

    .navbar-main {
      padding: 10px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .logo-img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      border-radius: 10px;
    }

    .logo-scrap {
      font-size: 1.6rem;
      font-weight: 800;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #1a8a4a, #2ecc71);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    }

    .nav-links-row {
      display: flex;
      gap: 4px;
    }

    .nav-link {
      text-decoration: none;
      color: var(--text-dim);
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      padding: 10px 14px;
      border-radius: 12px;
    }

    .nav-link:hover {
      color: var(--primary);
      background: rgba(39, 174, 96, 0.08);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .call-now-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      padding: 8px 16px;
      border-radius: 16px;
      color: white;
      transition: all 0.4s ease;
      box-shadow: 0 4px 15px rgba(39, 174, 96, 0.2);
    }

    .call-icon {
      font-size: 1.2rem;
      background: rgba(255, 255, 255, 0.2);
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }

    .call-content {
      display: flex;
      flex-direction: column;
    }

    .call-label {
      font-size: 0.65rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .call-number {
      font-size: 0.9rem;
      font-weight: 800;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
      z-index: 1001;
    }

    .hamburger {
      width: 24px;
      height: 18px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hamburger span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--primary);
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .hamburger.active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .mobile-menu {
      display: none;
      padding: 0 24px 20px;
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.3s ease;
    }

    .mobile-menu.active {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-top: 10px;
      border-top: 1px solid rgba(0,0,0,0.05);
    }

    .mobile-nav-link {
      text-decoration: none;
      color: var(--text-main);
      font-weight: 600;
      padding: 12px 0;
      font-size: 1.1rem;
      border-bottom: 1px solid rgba(0,0,0,0.03);
    }

    .hide-mobile { display: flex; }
    .show-mobile-only { display: none; }

    @media (max-width: 992px) {
      .desktop-only { display: none; }
      .menu-toggle { display: block; }
      .logo-scrap { font-size: 1.3rem; }
    }

    @media (max-width: 576px) {
      .navbar-main { padding: 8px 16px; }
      .hide-mobile { display: none; }
      .show-mobile-only { display: block; font-size: 0.8rem; font-weight: 700; }
      .call-now-btn { padding: 6px 12px; }
      .call-icon { width: 28px; height: 28px; font-size: 1rem; }
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
