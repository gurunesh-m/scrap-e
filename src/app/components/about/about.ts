import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="about-hero glass-card animate-in">
        <div class="recycle-logo">♲</div>
        <h1 class="page-title">Who <span class="accent">We Are</span></h1>
        <p class="about-text">
          ScrapHome is a leading provider of professional scrap collection and management services. We believe in a zero-waste future and are committed to helping our customers reduce their environmental footprint.
        </p>
        <p class="about-text">
          Our team is passionate about the environment and works tirelessly to ensure that all materials collected are disposed of in a responsible and eco-friendly manner.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding-top: 15vh;
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--bg-soft);
      padding-bottom: 5rem;
    }

    .about-hero {
      width: 90%;
      max-width: 900px;
      padding: 60px;
      margin-bottom: 50px;
      text-align: center;
      border-radius: 40px;
    }

    .page-title {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    .accent { color: var(--primary); }

    .about-text {
      font-size: 1.15rem;
      color: var(--text-dim);
      margin-bottom: 1.5rem;
      line-height: 1.8;
      font-weight: 300;
    }

    .recycle-logo {
      font-size: 5rem;
      color: var(--primary);
      margin-bottom: 20px;
      animation: rotate 10s linear infinite;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .page-container {
        padding-top: 120px;
      }
      .about-hero {
        padding: 30px 20px;
        width: 95%;
        border-radius: 24px;
      }
      .page-title {
        font-size: 2rem;
      }
      .about-text {
        font-size: 1rem;
      }
      .recycle-logo {
        font-size: 3.5rem;
      }
    }

    .animate-in { animation: fadeInUp 1s ease forwards; }
    .animate-in-delay { animation: fadeInUp 1s ease 0.3s forwards; opacity: 0; }

    @keyframes fadeInUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `]
})
export class AboutComponent { }
