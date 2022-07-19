import { Injectable } from '@angular/core';

import { Perso } from './perso'
// import { PERSONNAGES } from './mock-perso-list'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap , of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root' //Une propriete qui permet d'indiquer a angular qu'on veut utiliser dans toute l'application
})
export class PersoService {

  constructor(
    private http:HttpClient
  ) { }

  // getPersoList():Perso[] {
  //   return PERSONNAGES;
  // }

  getPersoList():Observable<Perso[]> {
    return this.http.get<Perso[]>('api/perso').pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error , []))
    );
  }

  // getPersoById(persoId:number):Perso|undefined {
  //   return PERSONNAGES.find(perso => perso.id == persoId)
  // }

  getPersoById(persoId:number):Observable<Perso|undefined> {
    return this.http.get<Perso>(`api/perso/${persoId}`).pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchPersoList(term:string):Observable<Perso[]>{
    if(term.length <= 1 ){
      return of([]);
    }
    return this.http.get<Perso[]>(`api/perso/?name=${term}`).pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error, []))
    )
  }

  updatePerso(perso:Perso):Observable<null> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put('api/perso/',perso , httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null)) 
    )
  }

  deletePersoById(persoId:number):Observable<null> {
    return this.http.delete(`api/perso/${persoId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null)) 
    );
  }

  addPerso(perso:Perso): Observable<Perso> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<Perso>('api/perso',perso, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null)) 
    );
  }

  private log(response:any) {
    console.table(response);
  }

  private handleError(error:Error, errorValue:any){
    console.error(error);
    return of(errorValue);
  }



  getPersoChakraList():string[] {
    return [
      'Suiton' , 
      'Futon' , 
      'Katon' , 
      'Doton', 
      'Inton' , 
      'Yoton' , 
      'Mokuton' , 
      'Inyonton' ,
      'Raiton',
      'Jinton'
    ];
  }
}
