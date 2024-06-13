import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

class Bitacora {
}

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {
  private BASE_URL = 'http://localhost:8080/api/v1/problemas'; // Reemplaza esto con la URL de tu API

  constructor(private http: HttpClient) { }

  getBitacoras(): Observable<Bitacora[]> {
    return this.http.get<Bitacora[]>(`${this.BASE_URL}/listar`);
  }
}
