import { Injectable } from '@angular/core';
import {InMemoryDbService } from 'angular-in-memory-web-api';

import {PERSONNAGES} from './Personnages/mock-perso-list'
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const perso = PERSONNAGES
    return {perso}
  }
}
