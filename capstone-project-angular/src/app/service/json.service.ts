import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gastronomia } from '../models/gastronomia';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private baseURL = 'http://localhost:3001';  // Cambia con l'URL di base del tuo API

  constructor(private http: HttpClient) { }

  getGastronomie(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/gastronomia`);
  }


}
