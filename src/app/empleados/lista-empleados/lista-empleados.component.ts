import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})export class ListaEmpleadosComponent {
  constructor(private _empleadosService: EmpleadosService) {}

  get empleados(): IEmpleado[] {
    return this._empleadosService.empleados;
  }

  eliminarEmpleado(index: number): void {
    this._empleadosService.eliminarEmpleado(index);
  }
}
