import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {
  nuevo: IEmpleado= {
    nombre:"",
    fechaNacimiento: undefined,
    correo : "",
    telefono : 0,
    sexo: ""
  }

  //@Output()
  //onNuevoCliente: EventEmitter<ICliente> = new EventEmitter();

  constructor (private _empleadosService : EmpleadosService){}


  agregar(){
    console.log(this.nuevo)
    if(this.nuevo.nombre.trim().length === 0)
      return;
    if(this.nuevo.fechaNacimiento ===undefined)
      return;
    if(this.nuevo.sexo.trim().length === 0)
      return;
    if(this.nuevo.telefono.toString().length != 10)
      return;
    //pasar nuevo objeto al evento
    //this.onNuevoCliente.emit(this.nuevo);

    //Agregamos al nuevo cliente por medio del servicio
    this._empleadosService.agregarEmpleado(this.nuevo)
    this.nuevo = {
      nombre:"",
      fechaNacimiento: new Date(),
      correo : "",
      telefono : 0,
      sexo: ""
    }
  }
}
