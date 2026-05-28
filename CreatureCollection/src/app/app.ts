import { Component, signal, Input, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { PalForm } from "./pal-form/pal-form";
import { PalList } from "./pal-list/pal-list";
import { Pal } from './models/pal';
import { PalCollection } from './service/pal-collection';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, PalForm, PalList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CreatureCollection');


  savedPals = localStorage.getItem('pals'); 

  palCollectionService = inject(PalCollection);

  constructor() {
    if (this.savedPals) {
      this.palCollectionService.palCollection = JSON.parse(this.savedPals);
    }
  }
} 
