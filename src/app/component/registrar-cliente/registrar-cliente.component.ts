import { Component } from '@angular/core';
import {Cliente} from "../../model/cliente";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ClienteService} from "../../service/cliente.service";
import Swal from 'sweetalert2';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-registrar-cliente',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.css'
})
export class RegistrarClienteComponent {
  clienteArray: Cliente[] = [];
  clienteForm: FormGroup;

  constructor(private clienteService: ClienteService) {
    this.clienteForm = new FormGroup({
      nombres: new FormControl('', []),
      apellidos: new FormControl('', []),
      dni: new FormControl('', []),
      sexo: new FormControl('', []),
      direccion: new FormControl('', []),
      telefono: new FormControl('', [])
    });
  }
  ngOnInit(): void {
    this.clienteForm.reset();
    this.getClientes();

  }
  getClientes(): void {
    this.clienteService.getClientes().subscribe(
      (result: any) => {
        console.log(result);
        this.clienteArray = result;
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia!...',
          text: '!Ah ocurrido un error!',
        });
      }
    );
  }

  eliminarCliente(cliente: Cliente): void {
    this.clienteService.eliminarCliente(cliente).subscribe(
      (result: any) => {
        this.ngOnInit();
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'eliminarPersona!...',
          text: '!Se elimino exitosamente los datos de la persona!',
        });
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia!...',
          text: '!Ah ocurrido un error al eliminar persona!',
        });
      }
    );
  }

  registrarCliente(): void {
    this.clienteService.registrarCliente(this.clienteForm.value).subscribe(
      (result: any) => {
        this.ngOnInit();
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'registrarPersona!...',
          text: '!Se registro exitosamente los datos de la persona!',
        });
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia!...',
          text: '!Ah ocurrido un error al registrar persona!',
        });
      }
    );
  }

  editarCliente(cliente: Cliente): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'editarPersona!...',
      text: '!Falta implementar esta funcionalidad!',
    });
  }
}


