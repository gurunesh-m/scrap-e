import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ScrapHome');
}
