import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  template: `
    <div class="page-container">
      <h1 class="page-title animate-in">Our <span class="accent">Eco-Services</span></h1>
      
      <div class="grid">
        <div class="glass-card animate-in-delay">
          <div class="service-icon">📍</div>
          <h3>Available for Coimbatore only</h3>
          <p>Exclusively serving the Coimbatore region with dedicated local support.</p>
        </div>
        <div class="glass-card animate-in-more-delay">
          <div class="service-icon">🚚</div>
          <h3>Door step pickup</h3>
          <p>No need to travel. We come directly to your home at your convenience.</p>
        </div>
        <div class="glass-card animate-in-more-delay">
          <div class="service-icon">⚡</div>
          <h3>Save your time</h3>
          <p>Quick schedules and efficient collection process to value your time.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding-top: 15vh;
      min-height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--light);
      padding-bottom: 5rem;
    }

    .page-title {
      font-size: 3rem;
      margin-bottom: 3rem;
      color: var(--text-main);
    }

    .accent { color: var(--primary); }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      width: 90%;
      max-width: 1200px;
    }

    .glass-card {
      padding: 40px;
      transition: all 0.3s ease;
      text-align: center;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(46, 204, 113, 0.1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    }

    .glass-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-color: var(--primary);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-main);
    }

    p { color: var(--text-dim); line-height: 1.6; }

    .animate-in { animation: fadeInUp 1s ease forwards; }
    .animate-in-delay { animation: fadeInUp 1s ease 0.3s forwards; opacity: 0; }
    .animate-in-more-delay { animation: fadeInUp 1s ease 0.6s forwards; opacity: 0; }

    @keyframes fadeInUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `]
})
export class ServiceComponent { }
