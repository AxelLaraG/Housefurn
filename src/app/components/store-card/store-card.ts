import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Store {
  name: string;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-store-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-card.html',
  styleUrl: './store-card.scss',
})
export class StoreCard {
  @Input({ required: true }) store!: Store;
}
