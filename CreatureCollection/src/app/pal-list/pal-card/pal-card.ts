import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pal } from '../../pal-form/pal-form';

@Component({
  selector: 'app-pal-card',
  imports: [],
  templateUrl: './pal-card.html',
  styleUrl: './pal-card.css',
})
export class PalCard {
  palImage = 'Anubis_icon.png';
  favorite = 'favoritePalIcon.png';

  @Input() palCards: Pal[] = [];

  @Output() deletedPal = new EventEmitter<number>();
  @Output() trainedPal = new EventEmitter<number>();
  
  onPalDelete(index: number) {
    this.deletedPal.emit(index);
  }
  onPalTrained(level: number, index: number) {
    if (level < 65) {
      this.trainedPal.emit(index);
    }
  }

}
