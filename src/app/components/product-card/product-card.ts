import { Component,Input, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})

export class ProductCard {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) image: string = '';
  @Input() rating: number | null = null;
  @Input() badge: string | null = null;
  
  protected formattedPrice = signal(this.price.toFixed(2));
  
  //Generar estrellas
  protected getStarRating(rating: number | null): string { 
    if (rating === null) { 
      return '';
    }
    
    const fullStars = '★'.repeat(Math.floor(rating));
    const emptyStars = '☆'.repeat(5 - Math.floor(rating));
    
    return fullStars + emptyStars
  }
  
}
