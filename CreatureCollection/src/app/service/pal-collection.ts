import { inject, Injectable } from '@angular/core';
import { Pal } from '../models/pal';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PalCollection {



  
  private http = inject(HttpClient);


  palCollection: Pal[] = [];

  loadPals() {
    return this.http.get<Pal[]>("http://localhost:8080/api/pals").pipe(tap((pals) => {
      this.palCollection = pals;
    })
  )
  }


  addPal(newPal: Pal) {
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.post("http://localhost:8080/api/pals", newPal).subscribe();
    this.palCollection.push(newPal);
    
  }

  handlePalDeletion(palId: number) {
    this.palCollection.splice(palId,1);
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.delete(`http://localhost:8080/api/pals/${palId}`).subscribe(() => {
      this.loadPals().subscribe();
    });
  }

  handleTrainedPal(index: number) {
    this.palCollection[index].palLevel += 1;
    //localStorage.setItem('pals',JSON.stringify(this.palCollection));
    this.http.put(`http://localhost:8080/api/pals/${this.palCollection[index].palId}`,this.palCollection[index]).subscribe(() => {
      this.loadPals().subscribe();
    });
  }
}
