import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Perso } from '../perso';
import { PersoService } from '../perso.service';


@Component({
  selector: 'app-perso-list',
  templateUrl: './perso-list.component.html',
  styleUrls: ['./perso-list.component.css']
})
export class PersoListComponent implements OnInit {

  persoList:Perso[];

  constructor(
    private router:Router , 
    private persoService:PersoService
  ) { }

  ngOnInit() {
    // this.persoList = this.persoService.getPersoList();
    this.persoService.getPersoList()
      .subscribe(persoList => this.persoList = persoList)
  }

  goToPerso(perso:Perso){
    this.router.navigate(['/perso',perso.id])
  }

}
