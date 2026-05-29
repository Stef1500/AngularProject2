import { Component, EventEmitter, Input,Output, inject } from '@angular/core';
import { PalCard } from "./pal-card/pal-card";
import { Pal } from '../models/pal';
import { PalCollection } from '../service/pal-collection';

@Component({
  selector: 'app-pal-list',
  imports: [PalCard],
  templateUrl: './pal-list.html',
  styleUrl: './pal-list.css',
})
export class PalList {

  palCollectionService = inject(PalCollection);

}
