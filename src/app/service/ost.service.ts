import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehiculo} from "../model/vehiculo";
import {Ordenserviciotecnico} from "../model/ordenserviciotecnico";
import {Cliente} from "../model/cliente";
@Injectable({
  providedIn: 'root'
})
export class OstService {
  readonly BASE_URL = "http://localhost:8080/api/v1/ost";
  constructor(private http:HttpClient) { }

  getOSTs(): Observable<Ordenserviciotecnico[]> {
    return this.http.get<Ordenserviciotecnico[]>(`${this.BASE_URL}/listar`);
  }

  registrarOST(cliente: Cliente, vehiculo: Vehiculo, falla: string) {
    const form = {
      cliente,
      vehiculo,
      falla
    };
    return this.http.post(`${this.BASE_URL}/insert`, form);
  }

  buscarCliente(dni: string): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/v1/cliente/searchDNI', { dni });
  }
  verificarVehiculo(placa:string): Observable<Vehiculo> {
    return this.http.post<Vehiculo>('http://localhost:8080/api/v1/vehiculo/searchPlaca', { placa });
  }
  registrarVehiculo(placa: string, modelo: string, marca: string) {
    const form = {
      placa,
      modelo,
      marca};
    return this.http.post(`http://localhost:8080/api/v1/vehiculo/insert`, form);
  }
}
