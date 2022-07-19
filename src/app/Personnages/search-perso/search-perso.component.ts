import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Perso } from '../perso';
import { PersoService } from '../perso.service';

@Component({
  selector: 'app-search-perso',
  templateUrl: './search-perso.component.html',
  styleUrls: ['./search-perso.component.css']
})
export class SearchPersoComponent implements OnInit {

  searchTerms = new Subject<string>();
  perso$:Observable<Perso[]>;

  constructor(
      private router:Router,
      private  persoService: PersoService
      ) { }

  ngOnInit(): void {
    this.perso$ = this.searchTerms.pipe(
      //{...'a'.'ab'...'abz'...'abc'.....}
      debounceTime(300),
      //{.....'ab'....'ab'...'abc'...... }
      distinctUntilChanged(),
      //{....'ab......'abc'.....}
      switchMap((term)=> this.persoService.searchPersoList(term))
      //{Map....Observable<'ab'>......Observable<'abc'>.....}
      //concatMap / mergeMap / SwitchMap
    );
  }

  search(term:string){
    this.searchTerms.next(term);
  }

  goToDetail(perso:Perso){
    const link = ['/perso',perso.id]
    this.router.navigate(link)
  }

}
function next(term: string) {
  throw new Error('Function not implemented.');
}

