import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private _empleados: IEmpleado[] = [];

  constructor() {
    // Recuperar la lista de localstorage
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }

  // Método get para acceder a la lista
  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado): void {
    this._empleados.push(empleado);
    this.actualizarLocalStorage();
  }

  eliminarEmpleado(index: number): void {
    this._empleados.splice(index, 1);
    this.actualizarLocalStorage();
  }

  private actualizarLocalStorage(): void {
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }
}
