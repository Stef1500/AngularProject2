import { Component, signal, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Pal, PalForm } from "./pal-form/pal-form";
import { PalList } from "./pal-list/pal-list";

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, PalForm, PalList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CreatureCollection');


  palArray: Pal[] = [];


  addPal(newPal: Pal) {

    this.palArray.push(newPal);
    console.log(this.palArray);
    
  }

  handlePalDeletion(index: number) {
    this.palArray.splice(index,1);
  }

  handleTrainedPal(index: number) {
    this.palArray[index].palLevel += 1;
  }
} 
