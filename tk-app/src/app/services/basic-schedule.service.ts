import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { PatientSchedule } from '../models/patient_schedule';
import { IVirtualDoc } from '../models/virtualDoc';


@Injectable({
  providedIn: 'root'
})
export class BasicScheduleService {

  url: string = "http://localhost:3000/patient_schedule";

  url_db: string = "./assets/datasample/virtual.json"

  constructor(private _http: HttpClient) { }

  getPatient_schedule(): Observable<PatientSchedule[]>{
    return this._http.get<PatientSchedule[]>(this.url).pipe(
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
