import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegistrarClienteComponent} from "./component/registrar-cliente/registrar-cliente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrarClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd-Automotriz';
}
