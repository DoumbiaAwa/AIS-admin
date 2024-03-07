import { Injectable } from '@angular/core';
import { Categorie } from 'src/app/model/categorie';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoriService {
 private apiurl = 'http://localhost:9000/api-koumi/Categorie'
  constructor(private http: HttpClient) { }

  addCategorie(type: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.post(`${this.apiurl}/addCategorie`, type, { headers, responseType: 'text' })
      .pipe(
        tap(data => console.log('Success:', data)),
        catchError(error => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }

  getCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>( `${this.apiurl}/allCategorieByFiliere/:id/`).pipe(
      tap(_ => console.info()),
      catchError(error => {
        console.error("error", error);
        return[]
      })
    )
  
  }
  
  // deleteFiliere(idFiliere: number): Observable<any>{
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.http.delete(`${this.apiurl}/delete/${idFiliere}`, { headers, responseType: 'text' }).pipe(
  
  //     catchError(error => {
  //       console.error("Erreur sur la suppression du filiere", error);
  //       return throwError(error);
  //     })
  //   );
    
  // }
}
