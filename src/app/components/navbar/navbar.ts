import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  template: `
    <nav class="navbar glass-card">
      <div class="logo">
        <div class="logo-icon">♲</div>
        <span class="neon-text">SCRAP</span>HOME
      </div>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item">Home</a>
        <a routerLink="/service" routerLinkActive="active" class="nav-item">Service</a>
        <a routerLink="/about" routerLinkActive="active" class="nav-item">About</a>
        <a routerLink="/contact" routerLinkActive="active" class="nav-item">Contact</a>
      </div>
      <div class="nav-spacer"></div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 1000px;
      height: 70px;
      padding: 0 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 1000;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
      border-radius: 40px;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: 2px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-icon {
      font-size: 2rem;
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      gap: 30px;
    }

    .nav-item {
      text-decoration: none;
      color: var(--text-dim);
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-item:hover, .nav-item.active {
      color: var(--primary);
    }

    .nav-item::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width 0.3s ease;
    }

    .nav-item:hover::after, .nav-item.active::after {
      width: 100%;
    }

    .nav-spacer {
      width: 40px; /* To balance the logo width for centering nav links if needed */
    }
  `]
})
export class NavbarComponent { }
