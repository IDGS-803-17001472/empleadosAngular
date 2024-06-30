import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FormsModule } from '@angular/forms';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';



@NgModule({
  declarations: [
    ListaEmpleadosComponent,
    AgregarEmpleadoComponent,
    EncabezadoComponent,
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PaginaInicioComponent,
    ListaEmpleadosComponent
  ]
})
export class EmpleadosModule { }
