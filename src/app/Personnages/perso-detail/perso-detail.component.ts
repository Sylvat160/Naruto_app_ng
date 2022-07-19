import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersoService } from '../perso.service';
import { Perso } from '../perso';
import { PERSONNAGES } from '../mock-perso-list';

@Component({
  selector: 'app-perso-detail',
  templateUrl: './perso-detail.component.html',
  styleUrls: ['./perso-detail.component.css']
})
export class PersoDetailComponent implements OnInit {

  persoList : Perso[];
  personnage:Perso|undefined;

  constructor(
    private route: ActivatedRoute , 
    private router:Router,
    private persoService : PersoService
  ) { }

  ngOnInit(){
      this.persoList = PERSONNAGES;
      const persoId:string|null = this.route.snapshot.paramMap.get('id'); 
      if(persoId) {
        // this.personnage = this.persoList.find(perso => perso.id == +persoId);
        // this.personnage = this.persoService.getPersoById(+persoId);
        this.persoService.getPersoById(+persoId)
          .subscribe(personnage => this.personnage = personnage);
      }
  }

  deletePersonnage(perso:Perso){
    this.persoService.deletePersoById(perso.id)
      .subscribe(() => this.goToList());
  }

  goToList(){
    this.router.navigate(['/perso'])
  }

  goToEditPerso(personnage:Perso) {
    this.router.navigate(['edit/perso',personnage.id])
  }

}
