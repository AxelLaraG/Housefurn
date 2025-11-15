import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');

  @ViewChild('productGrid') productGridRef!: ElementRef;

  scrollCarousel(direction: 'left' | 'right'): void {
    const element = this.productGridRef.nativeElement;
    const cardWidth = element.clientWidth / 4;
    const scrollAmount = cardWidth;
    const maxScroll = element.scrollWidth - element.clientWidth;
    const buffer = 20;

    if (direction === 'right') {
      if (element.scrollLeft >= maxScroll - buffer) {
        element.scrollLeft = 0;
      } else {
        element.scrollLeft += scrollAmount;
      }
    } else {
      if (element.scrollLeft <= buffer) {
        element.scrollLeft = maxScroll;
      } else {
        element.scrollLeft -= scrollAmount;
      }
    }
  }
}
