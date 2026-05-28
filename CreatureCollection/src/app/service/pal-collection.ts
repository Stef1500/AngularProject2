import { Injectable } from '@angular/core';
import { Pal } from '../models/pal';

@Injectable({
  providedIn: 'root',
})
export class PalCollection {

  palCollection: Pal[] = [];


  addPal(newPal: Pal) {

    this.palCollection.push(newPal);
    localStorage.setItem('pals',JSON.stringify(this.palCollection));
    
  }

  handlePalDeletion(index: number) {
    this.palCollection.splice(index,1);
    localStorage.setItem('pals',JSON.stringify(this.palCollection));
  }

  handleTrainedPal(index: number) {
    this.palCollection[index].palLevel += 1;
    localStorage.setItem('pals',JSON.stringify(this.palCollection));
  }
}
