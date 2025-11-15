import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './components/product-card/product-card';
import { Store, StoreCard } from './components/store-card/store-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard, StoreCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');

  @ViewChild('productGrid') productGridRef!: ElementRef;

  //Test Data
  protected readonly stores: Store[] = [
    {
      name: 'Regalos para Amigos',
      image: 'TestData/TiendaA.jpg',
      description: 'Piezas pensadas para la convivencia y el buen diseño.',
      link: '#',
    },
    {
      name: 'Mobiliario Premium',
      image: 'TestData/TiendaB.jpg',
      description: 'Muebles de alta calidad y diseño moderno.',
      link: '#',
    },
    {
      name: 'Iluminación y Decoración',
      image: 'TestData/TiendaC.jpg',
      description: 'Detalles que transforman cualquier espacio.',
      link: '#',
    },
  ];

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
