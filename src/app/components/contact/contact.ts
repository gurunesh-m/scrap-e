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

        <a href="tel:+919042737339" class="detail-link">
          <div class="detail-item glass-card">
            <span class="icon">📞</span>
            <div class="info">
              <h3>Phone</h3>
              <p>+91 9042737339</p>
            </div>
          </div>
        </a>
      </div>

      <div class="map-wrapper animate-in-more-delay">
        <div class="map-container glass-card">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.7373074041907!2d77.288412!3d10.98319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU4JzU5LjUiTiA3N8KwMTcnMTguMyJF!5e0!3m2!1sen!2sin!4v1773307369425!5m2!1sen!2sin" 
            width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 60px 30px;
      min-height: 80vh;
      max-width: 1000px;
      margin: 110px auto 50px;
      text-align: center;
      border-radius: 40px;
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
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 15px;
      margin-top: 10px;
      max-width: 850px;
      margin-left: auto;
      margin-right: auto;
    }

    .detail-link {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px 20px;
      text-align: left;
      transition: all 0.3s ease;
      height: 100%;
      border-radius: 20px;
    }

    .detail-item:hover {
      transform: translateY(-5px);
      background: rgba(46, 204, 113, 0.05);
      border-color: var(--primary);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .icon {
      font-size: 1.8rem;
    }

    .info h3 {
      font-size: 1rem;
      margin-bottom: 2px;
      color: var(--primary);
    }

    .info p {
      font-size: 0.9rem;
      color: var(--text-main);
      font-weight: 500;
    }

    .map-wrapper {
      margin-top: 40px;
      width: 100%;
    }

    .map-container {
      border-radius: 25px;
      overflow: hidden;
      border: 1px solid rgba(46, 204, 113, 0.2);
    }

    .map-container iframe {
      display: block;
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 40px 20px;
        margin-top: 100px;
        width: 95%;
        border-radius: 24px;
      }
      .page-title {
        font-size: 2.5rem;
      }
      .subtitle {
        font-size: 1rem;
        margin-bottom: 2rem;
      }
      .contact-details {
        grid-template-columns: 1fr;
        gap: 12px;
      }
      .detail-item {
        padding: 12px 15px;
      }
      .icon {
        font-size: 1.5rem;
      }
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
