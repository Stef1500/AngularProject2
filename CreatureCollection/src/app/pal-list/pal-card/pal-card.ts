import { Component, EventEmitter, inject, Input, Output, ChangeDetectorRef} from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

  palCollectionService = inject(PalCollection);

  isloading = true;

  ngOnInit() {
    this.palCollectionService.loadPals().subscribe( (pals) => {
      console.log(pals);
      this.palCollectionService.palCollection = pals;
      console.log(this.palCollectionService.palCollection);
      this.isloading = false;

      this.cdr.detectChanges(); //detects any changes in the array and acts accordingly
    })

  }

  
  onPalDelete(index: number) {
    this.palCollectionService.handlePalDeletion(index);
  }
  onPalTrained(level: number, index: number) {
    if (level < 65) {
      this.palCollectionService.handleTrainedPal(index);
    }
  }

}
