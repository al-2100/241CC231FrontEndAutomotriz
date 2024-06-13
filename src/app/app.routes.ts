// @ts-ignore

import { Routes } from '@angular/router';
import {RegistrarClienteComponent} from "./component/registrar-cliente/registrar-cliente.component";
import {RegistrarOstComponent} from "./component/registrar-ost/registrar-ost.component";

export const routes: Routes = [
  {path: 'registrar-cliente', component:RegistrarClienteComponent},
  {path: 'registrar-ost', component:RegistrarOstComponent},


];
