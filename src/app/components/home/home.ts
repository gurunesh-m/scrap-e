import { Component, ElementRef, ViewChild, OnDestroy, afterNextRender } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <div id="canvas-container" #canvasContainer></div>
      
      <div class="hero-content">
        <h1 class="hero-title animate-in">Clean <span class="accent"></span> Your <span class="accent">Sweet Home</span></h1>
        <p class="hero-quote animate-in-delay">"Sustainability is no longer about doing less harm. It's about doing more good."</p>
        
        <div class="quote-slider animate-in-more-delay">
          <div class="quote-card glass-card">
            <p>"Clean space, clear mind. We pick up your scrap, you pick up the peace."</p>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="floater" style="top: 20%; left: 10%; width: 50px; height: 50px;">📦</div>
      <div class="floater" style="top: 50%; left: 80%; width: 70px; height: 70px;">♻️</div>
      <div class="floater" style="top: 15%; left: 70%; width: 40px; height: 40px;">🚚</div>
      <div class="floater" style="top: 70%; left: 20%; width: 60px; height: 60px;">🏠</div>
    </div>
  `,
  styles: [`
    .home-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #canvas-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: radial-gradient(circle at 50% 50%, #ffffff 0%, #f0f4f8 100%);
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      padding: 2rem;
      z-index: 10;
    }

    .hero-title {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      color: var(--text-main);
    }

    .accent {
      color: var(--primary);
      position: relative;
    }

    .hero-quote {
      font-size: 1.25rem;
      color: var(--text-dim);
      margin-bottom: 3rem;
      font-style: italic;
    }

    .quote-card {
      padding: 30px;
      max-width: 500px;
      margin: 0 auto;
      border-radius: 20px;
      font-size: 1.1rem;
      font-weight: 300;
    }

    .animate-in { animation: fadeInUp 1s ease forwards; }
    .animate-in-delay { animation: fadeInUp 1s ease 0.3s forwards; opacity: 0; }
    .animate-in-more-delay { animation: fadeInUp 1s ease 0.6s forwards; opacity: 0; }

    @keyframes fadeInUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .floater {
      font-size: 2rem;
      position: absolute;
      animation: float 6s ease-in-out infinite;
      opacity: 0.3;
    }

    @media (max-width: 768px) {
      .hero-title { font-size: 2.5rem; }
    }
  `]
})
export class HomeComponent implements OnDestroy {
  @ViewChild('canvasContainer') canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private houseGroup!: THREE.Group;
  private animationId!: number;

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
  }

  private initThree() {
    const container = this.canvasContainer.nativeElement;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.set(5, 5, 10);
    this.camera.lookAt(0, 1.5, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x27ae60, 2); // Primary green light
    pointLight.position.set(2, 5, 2);
    this.scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-5, 5, 5);
    this.scene.add(directionalLight);

    // Create simple House
    this.houseGroup = new THREE.Group();

    // Base (box)
    const baseGeometry = new THREE.BoxGeometry(4, 3, 4);
    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0x27ae60,
      transparent: true,
      opacity: 0.15,
      wireframe: false
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 1.5;
    this.houseGroup.add(base);

    // Wireframe for aesthetics
    const wireframeBase = new THREE.LineSegments(
      new THREE.EdgesGeometry(baseGeometry),
      new THREE.LineBasicMaterial({ color: 0x39ff14, transparent: true, opacity: 0.15 })
    );
    wireframeBase.position.y = 1.5;
    this.houseGroup.add(wireframeBase);

    // Roof (prism/cone-ish)
    const roofGeometry = new THREE.ConeGeometry(4, 2, 4);
    const roofMaterial = new THREE.MeshPhongMaterial({
      color: 0x2ecc71,
      transparent: true,
      opacity: 0.15
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 4;
    roof.rotation.y = Math.PI / 4;
    this.houseGroup.add(roof);

    const wireframeRoof = new THREE.LineSegments(
      new THREE.EdgesGeometry(roofGeometry),
      new THREE.LineBasicMaterial({ color: 0x39ff14, transparent: true, opacity: 0.15 })
    );
    wireframeRoof.position.y = 4;
    wireframeRoof.rotation.y = Math.PI / 4;
    this.houseGroup.add(wireframeRoof);

    this.scene.add(this.houseGroup);

    // Animation
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      this.houseGroup.rotation.y += 0.005;
      this.renderer.render(this.scene, this.camera);
    };

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }
}
