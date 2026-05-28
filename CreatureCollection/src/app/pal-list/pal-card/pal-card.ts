import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Pal } from '../../models/pal';
import { PalCollection } from '../../service/pal-collection';
@Component({
  selector: 'app-pal-card',
  imports: [],
  templateUrl: './pal-card.html',
  styleUrl: './pal-card.css',
})
export class PalCard {
  palImage = 'Anubis_icon.png';
  favorite = 'favoritePalIcon.png';

  palCollectionService = inject(PalCollection);

  palCards: Pal[] = this.palCollectionService.palCollection;


  
  onPalDelete(index: number) {
    this.palCollectionService.handlePalDeletion(index);
  }
  onPalTrained(level: number, index: number) {
    if (level < 65) {
      this.palCollectionService.handleTrainedPal(index);
    }
  }

}
