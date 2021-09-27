import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaContaService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3033/consulta';
  response: any;

  create(): Observable<any> {
    this.response = this.http.get(this.baseUrl);
    return this.response;
  }
  tableModal(param: any) {
    if (param) {
      this.response = param;
    }
    return this.response;
  }
}
