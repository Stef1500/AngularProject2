import { inject, Injectable } from '@angular/core';
import { Pal } from '../models/pal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PalCollection {



  
  private http = inject(HttpClient);


  palCollection: Pal[] = [];

  loadPals() {
    return this.http.get<Pal[]>("http://localhost:8080/api/pals")
  }


  addPal(newPal: Pal) {

    //this.palCollection.push(newPal);
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.post("http://localhost:8080/api/pals", newPal).subscribe();
    
  }

  handlePalDeletion(index: number) {
    this.palCollection.splice(index,1);
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.delete(`http://localhost:8080/api/pals/${index}`).subscribe();
  }

  handleTrainedPal(index: number) {
    this.palCollection[index].palLevel += 1;
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.put(`http://localhost:8080/api/pals/${this.palCollection[index].palId}`,this.palCollection[index]).subscribe();
  }
}
