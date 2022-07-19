import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perso } from '../perso';

import { PersoService } from '../perso.service';

@Component({
  selector: 'app-edit-perso',
  templateUrl: './edit-perso.component.html',
  styleUrls: ['./edit-perso.component.css']
})
export class EditPersoComponent implements OnInit {

  personnage:Perso|undefined

  constructor(
    private route:ActivatedRoute,
    private persoService:PersoService,
  ) { }

  ngOnInit(){
    const personnageId:string |null = this.route.snapshot.paramMap.get('id');
    if(personnageId){
      // this.personnage = this.persoService.getPersoById(+personnageId)
      this.persoService.getPersoById(+personnageId)
        .subscribe(personnage => this.personnage = personnage)
    } else {
      this.personnage = undefined;
    }
  }

}
