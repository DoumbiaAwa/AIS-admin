import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Acteurs } from 'src/app/model/acteur';
@Injectable({
  providedIn: 'root'
})
export class ActeurService {
private apiurl = 'https://Koumi.ml/typeActeur/create'
  constructor(private http: HttpClient) { }

  addActeur(acteur:any):Observable <any>{
    return this.http.post<Acteurs>(`${this.apiurl}/add-acteur`, acteur);
    
  }

}
