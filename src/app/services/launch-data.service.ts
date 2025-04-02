import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchDataService {
  private apiUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getAllLaunches(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/launches`);
  }

  getLaunchByFlightNumber(flightNumber: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/launches/${flightNumber}`);
  }

  getLaunchesByYear(year: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/launches/year/${year}`);
  }
}