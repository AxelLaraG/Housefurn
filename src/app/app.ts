import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product, ProductCard } from './components/product-card/product-card';
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

  protected readonly products: Product[] = [
    // Fila 1
    {
      name: 'Mesa de Centro Industrial',
      price: 120.99,
      image: 'TestData/MuebleB.png',
      rating: 4.0,
      badge: 'NUEVO!',
    },
    {
      name: 'Sillón Reclinable Gris',
      price: 349.5,
      image: 'TestData/MuebleA.png',
      rating: 4.9,
      badge: 'OFERTA!',
    },
    {
      name: 'Lámpara de Pie Minimalista',
      price: 75.0,
      image: 'TestData/MuebleA.png',
      rating: null,
      badge: 'NUEVO!',
    },
    {
      name: 'Estante Flotante de Madera',
      price: 45.99,
      image: 'TestData/MuebleB.png',
      rating: 4.2,
      badge: null,
    },
    // Fila 2
    {
      name: 'Juego de Tazas Modernas',
      price: 35.0,
      image: 'TestData/MuebleA.png',
      rating: 5.0,
      badge: 'TOP',
    },
    {
      name: 'Alfombra Geométrica',
      price: 199.0,
      image: 'TestData/MuebleB.png',
      rating: 4.7,
      badge: null,
    },
    {
      name: 'Espejo de Pared Circular',
      price: 95.0,
      image: 'TestData/MuebleA.png',
      rating: 4.0,
      badge: null,
    },
    {
      name: 'Silla de Comedor Ergonómica',
      price: 150.0,
      image: 'TestData/MuebleB.png',
      rating: 5.0,
      badge: 'EXCLUSIVO',
    },
    // Fila 3
    {
      name: 'Mesa Auxiliar Cobre',
      price: 60.5,
      image: 'TestData/MuebleA.png',
      rating: 4.5,
      badge: null,
    },
    {
      name: 'Butaca de Terciopelo',
      price: 280.0,
      image: 'TestData/MuebleB.png',
      rating: 4.9,
      badge: 'OFERTA!',
    },
    {
      name: 'Cojín Texturizado',
      price: 25.0,
      image: 'TestData/MuebleA.png',
      rating: 4.1,
      badge: 'NUEVO!',
    },
    {
      name: 'Florero Cerámico Blanco',
      price: 40.0,
      image: 'TestData/MuebleB.png',
      rating: 5.0,
      badge: null,
    },
    // Fila 4
    {
      name: 'Reloj de Pared Grande',
      price: 85.0,
      image: 'TestData/MuebleA.png',
      rating: 4.3,
      badge: null,
    },
    {
      name: 'Set de Velas Aromáticas',
      price: 15.0,
      image: 'TestData/MuebleB.png',
      rating: 4.6,
      badge: 'TOP',
    },
    {
      name: 'Manta de Lana Gris',
      price: 70.0,
      image: 'TestData/MuebleA.png',
      rating: 4.8,
      badge: null,
    },
    {
      name: 'Carrito Bar Dorado',
      price: 450.0,
      image: 'TestData/MuebleB.png',
      rating: 5.0,
      badge: 'LUJO',
    },
    // Fila 5
    {
      name: 'Escultura Abstracta',
      price: 110.0,
      image: 'TestData/MuebleA.png',
      rating: 4.7,
      badge: 'NUEVO!',
    },
    {
      name: 'Mesa de Noche Industrial',
      price: 90.0,
      image: 'TestData/MuebleB.png',
      rating: 4.0,
      badge: null,
    },
    {
      name: 'Revistero de Cuero',
      price: 55.0,
      image: 'TestData/MuebleA.png',
      rating: 4.5,
      badge: null,
    },
    {
      name: 'Lámpara Colgante Geométrica',
      price: 180.0,
      image: 'TestData/MuebleB.png',
      rating: 4.9,
      badge: 'OFERTA!',
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
