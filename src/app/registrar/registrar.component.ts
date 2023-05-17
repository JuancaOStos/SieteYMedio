import { Component } from '@angular/core';
import { ConnService } from '../conn.service';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  jugadores: any;
  nuevoJugador?: string;

  constructor(private conn: ConnService, private datos: DatosService) { }

  ngOnInit(): void{
    this.conn.getJugadores();
    this.jugadores = this.conn.jugadores;
  }

  registrarJugador(){
    if (this.nuevoJugador) this.conn.postJugador(this.nuevoJugador);
    this.conn.getJugadores();
  }
}
