import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  jugadoresSeleccionados?: any

  constructor() { }

  setJugadores(jugadoresSeleccionados: any[]): void {
    this.jugadoresSeleccionados = jugadoresSeleccionados;
    console.log("En setJugadores");
    console.log(this.jugadoresSeleccionados);
  }

  getJugadores(): any[]{
    if (this.jugadoresSeleccionados) return this.jugadoresSeleccionados;
    else return [];
  }

  
}
