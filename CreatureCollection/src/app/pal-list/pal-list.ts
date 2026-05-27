import { Component, EventEmitter, Input,Output } from '@angular/core';
import { PalCard } from "./pal-card/pal-card";
import { Pal } from '../pal-form/pal-form';

@Component({
  selector: 'app-pal-list',
  imports: [PalCard],
  templateUrl: './pal-list.html',
  styleUrl: './pal-list.css',
})
export class PalList {

  @Input() palList: Pal[] = [];

  @Output() deletedPal = new EventEmitter<number>();
  @Output() trainedPal = new EventEmitter<number>();

  onDeletedPal(index: number) {
    this.deletedPal.emit(index);
  }

  onPalTrained(index: number) {
    this.trainedPal.emit(index);
  }

}
