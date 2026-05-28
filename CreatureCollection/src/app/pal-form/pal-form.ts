import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Pal } from '../models/pal';
import { PalCollection } from '../service/pal-collection';

@Component({
  selector: 'app-pal-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pal-form.html',
  styleUrl: './pal-form.css',
})
export class PalForm {
  palName = new FormControl('');
  palType = new FormControl('Fire');
  palLevel = new FormControl('1');
  isFavorite = new FormControl('Yes')


  palCollectionService = inject(PalCollection);


  submitPal() {
    const newPalName = this.palName.value?.trim();
    const newPalType = this.palType.value?.trim();
    const newPalLevel = this.palLevel.value?.trim();
    let newIsFavorite = this.isFavorite.value?.trim();

    let booleanFavorite: boolean;

    if (newIsFavorite === 'Yes')
      booleanFavorite = true;
    else 
      booleanFavorite = false;

    if(newPalName && newPalLevel && newPalType) {
      const createdPal: Pal = {
        palName: newPalName,
        palType: newPalType,
        palLevel: parseInt(newPalLevel),
        isFavorite: booleanFavorite
      };

        this.palCollectionService.addPal(createdPal);
    }
  }
}

