import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IPatient_schedule } from './interfaces/Patient_schedule';
import { IVirtualDoc } from './models/virtualDoc';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  url: string = "http://localhost:3000/patient_schedule";

  url_db: string = "./assets/datasample/virtual.json"

  constructor(private _http: HttpClient) { }

  getPatient_schedule(): Observable<IPatient_schedule[]>{
    return this._http.get<IPatient_schedule[]>(this.url).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }

  getVirtualDoc_Schedule(): Observable<IVirtualDoc[]>{
    return this._http.get<IVirtualDoc[]>(this.url_db).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
