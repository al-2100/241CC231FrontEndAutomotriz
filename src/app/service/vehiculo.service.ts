import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehiculo} from "../model/vehiculo";

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {
  readonly BASE_URL = "http://localhost:8080/api/v1/vehiculo";
  constructor(private http:HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(`${this.BASE_URL}/listar`);
  }

  registrarVehiculo(form: any) {
    return this.http.post(`${this.BASE_URL}/insert`, form);
  }

  buscarVehiculo(form: any) {
    return this.http.post(`${this.BASE_URL}/search`, form);
  }

}
