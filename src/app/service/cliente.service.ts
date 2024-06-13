import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  readonly BASE_URL = "http://localhost:8080/api/v1/cliente";
  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.BASE_URL}/listar`);
  }
  registrarCliente(form: any) {
    return this.http.post(`${this.BASE_URL}/insert`, form);
  }

  actualizarCliente(form: any) {
    return this.http.post(`${this.BASE_URL}/update`, form);
  }

  eliminarCliente(cliente: Cliente) {
    return this.http.delete(`${this.BASE_URL}/delete`, { body: cliente });
  }
}
