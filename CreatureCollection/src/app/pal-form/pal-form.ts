import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

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


  @Output() newPal = new EventEmitter<Pal>(); //$event to be sent to app

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

        this.newPal.emit(createdPal);
    }
  }
}

export interface Pal {
  palName: string,
  palType: string,
  palLevel: number,
  isFavorite: boolean
}
