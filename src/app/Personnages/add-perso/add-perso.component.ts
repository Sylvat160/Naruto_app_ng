import { Component, OnInit } from '@angular/core';
import { Perso } from '../perso';

@Component({
  selector: 'app-add-perso',
  templateUrl: './add-perso.component.html',
  styleUrls: ['./add-perso.component.css']
})
export class AddPersoComponent implements OnInit {

  personnage:Perso;

  ngOnInit(): void {
    this.personnage = new Perso();
  }

}
