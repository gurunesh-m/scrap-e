import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="page-container glass-card">
      <h1 class="page-title animate-in">Let's <span class="accent">Connect</span></h1>
      <p class="subtitle animate-in-delay">Get in touch with us today for a free estimate.</p>

      <div class="contact-details animate-in-more-delay">
        <a href="https://wa.me/919042737339" target="_blank" class="detail-link">
          <div class="detail-item glass-card">
            <span class="icon">💬</span>
            <div class="info">
              <h3>WhatsApp</h3>
              <p>+91 9042737339</p>
            </div>
          </div>
        </a>

        <a href="mailto:novamobilespdm@gmail.com" class="detail-link">
          <div class="detail-item glass-card">
            <span class="icon">📧</span>
            <div class="info">
              <h3>Email</h3>
              <p>novamobilespdm@gmail.com</p>
            </div>
          </div>
        </a>

        <a href="tel:+911234567890" class="detail-link">
          <div class="detail-item glass-card">
            <span class="icon">📞</span>
            <div class="info">
              <h3>Phone</h3>
              <p>+91 9042737339</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 80px 40px;
      min-height: 70vh;
      max-width: 900px;
      margin: 15vh auto;
      text-align: center;
      border-radius: 50px;
      background: var(--glass);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    }

    .page-title {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      color: var(--text-main);
    }

    .accent { color: var(--primary); }

    .subtitle {
      color: var(--text-dim);
      font-size: 1.2rem;
      margin-bottom: 3.5rem;
    }

    .contact-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .detail-link {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 25px;
      text-align: left;
      transition: all 0.3s ease;
      height: 100%;
    }

    .detail-item:hover {
      transform: translateY(-5px);
      background: rgba(46, 204, 113, 0.05);
      border-color: var(--primary);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .icon {
      font-size: 2.5rem;
    }

    .info h3 {
      font-size: 1.2rem;
      margin-bottom: 5px;
      color: var(--primary);
    }

    .info p {
      font-size: 1rem;
      color: var(--text-main);
      font-weight: 500;
    }

    .animate-in { animation: fadeInUp 1s ease forwards; }
    .animate-in-delay { animation: fadeInUp 1s ease 0.3s forwards; opacity: 0; }
    .animate-in-more-delay { animation: fadeInUp 1s ease 0.6s forwards; opacity: 0; }

    @keyframes fadeInUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `]
})
export class ContactComponent { }
