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
      <div class="nav-links-stacked">
        <a href="#hero" class="nav-link" (click)="scrollTo($event, 'hero')">Home</a>
        <a href="#services" class="nav-link" (click)="scrollTo($event, 'services')">Industry</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 20px;
      left: 30px;
      height: auto;
      padding: 14px 24px;
      display: flex;
      align-items: center;
      gap: 24px;
      z-index: 1000;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.10);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(46, 204, 113, 0.15);
      animation: navSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    @keyframes navSlideIn {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-img {
      width: 48px;
      height: 48px;
      object-fit: contain;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .logo-img:hover {
      transform: scale(1.08);
    }

    .logo-scrap {
      font-size: 2.2rem;
      font-weight: 800;
      letter-spacing: 4px;
      background: linear-gradient(135deg, #1a8a4a, #2ecc71);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-links-stacked {
      display: flex;
      flex-direction: column;
      gap: 2px;
      border-left: 2px solid rgba(39, 174, 96, 0.2);
      padding-left: 18px;
    }

    .nav-link {
      text-decoration: none;
      color: var(--text-dim);
      font-weight: 600;
      font-size: 0.82rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      padding: 3px 8px;
      border-radius: 6px;
      position: relative;
    }

    .nav-link:hover {
      color: var(--primary);
      background: rgba(39, 174, 96, 0.08);
    }

    @media (max-width: 768px) {
      .navbar {
        top: 12px;
        left: 12px;
        padding: 10px 16px;
        gap: 14px;
      }

      .logo-scrap {
        font-size: 1.5rem;
        letter-spacing: 3px;
      }

      .logo-img {
        width: 36px;
        height: 36px;
      }

      .nav-link {
        font-size: 0.72rem;
      }
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
