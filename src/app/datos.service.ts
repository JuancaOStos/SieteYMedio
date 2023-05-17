import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  jugadoresSeleccionados?: string[];

  constructor() { }

  setJugadores(jugadoresSeleccionados: string[]): void {
    this.jugadoresSeleccionados = jugadoresSeleccionados;
    console.log(this.jugadoresSeleccionados);
  }

  getJugadores(): string[]{
    if (this.jugadoresSeleccionados) return this.jugadoresSeleccionados;
    else return [];
  }
}
