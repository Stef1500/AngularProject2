import { inject, Injectable, signal } from '@angular/core';
import { Pal } from '../models/pal';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PalCollection {



  
  private http = inject(HttpClient);


  palCollection = signal<Pal[]>([]);

  loadPals() {
    this.http.get<Pal[]>('http://localhost:8080/api/pals').subscribe({
      next: (data) => {
        this.palCollection.set(data);
      },
      error: () => {
        console.log("ERROR LOADING PAL COLLECTION");
      }
    });
  }


  addPal(newPal: Pal) {
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.post("http://localhost:8080/api/pals", newPal).subscribe({
      next: () => {
        this.loadPals();
      }
    });
    //this.palCollection.push(newPal);
  }

  handlePalDeletion(palId: number) {
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.delete(`http://localhost:8080/api/pals/${palId}`).subscribe({
      next: () => {
        this.loadPals();
      }
    });
    //this.palCollection.splice(palId,1);

  }

  handleTrainedPal(index: number) {
    //this.palCollection[index].palLevel += 1;
    const pal = this.palCollection()[index];
    const updatedPal = {... pal, palLevel: pal.palLevel + 1};
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.put(`http://localhost:8080/api/pals/${pal.palId}`,updatedPal).subscribe({
      next: () => {
        this.loadPals();
      }
    });
  }
}
