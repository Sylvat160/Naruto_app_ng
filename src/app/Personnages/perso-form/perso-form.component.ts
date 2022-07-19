import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PersoService } from '../perso.service';
import { Perso } from '../perso';

@Component({
  selector: 'app-perso-form',
  templateUrl: './perso-form.component.html',
  styleUrls: ['./perso-form.component.css']
})
export class PersoFormComponent implements OnInit {

  @Input() personnage:Perso;
  chakra:string[];
  isAddForm:boolean;

  constructor(
    private router:Router,
    private persoService:PersoService,
  ) { }

  ngOnInit() {
    this.chakra = this.persoService.getPersoChakraList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasChakra(chakra:string):boolean{
    return this.personnage.chakra.includes(chakra)
  }

  selectChakra($event: Event , chakra:string ) {
    const isChecked:boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked){
      this.personnage.chakra.push(chakra);
    } else {
      const index = this.personnage.chakra.indexOf(chakra);
      this.personnage.chakra.splice(index, 1);
    }
  }

  IsChakraValid(chakra:string ):boolean {
    if(this.personnage.chakra.length == 1 && this.hasChakra(chakra)){
      return false;
    }
    if(this.personnage.chakra.length > 2 && !this.hasChakra(chakra)){
      return false;
    }
    return true;
  }

  onSubmit() {
    if(this.isAddForm){
      this.persoService.addPerso(this.personnage)
        .subscribe((personnage:Perso) => this.router.navigate(['/perso', personnage.id])
        )}else {
      this.persoService.updatePerso(this.personnage)
      .subscribe((personnage) => {
          this.router.navigate(['/perso',this.personnage.id])
      });
    }
    // this.router.navigate(['perso',this.personnage.id])
  }

}
function includes(arg0: string) {
  throw new Error('Function not implemented.');
}

