import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { ConnService } from '../conn.service';

@Component({
  selector: 'app-inicio-elegir',
  templateUrl: './inicio-elegir.component.html',
  styleUrls: ['./inicio-elegir.component.css']
})
export class InicioElegirComponent {
  // valores de jugadores de prueba
  jugadores: string[] = ["Juan Carlos","Álvaro","Aida","Gisela","Cristian","Marina","Jomaru"];
  jugadorSeleccionado1?: string;
  jugadorSeleccionado2?: string;
  jugadorSeleccionado3?: string;
  jugadoresSeleccionados: string[] = [];
  constructor(private datos: DatosService) {}

  onSeleccionarJugador1(event: any){
    const seleccion = event.target.value;
    this.jugadorSeleccionado1 = seleccion !== "1" ? seleccion : null;
    console.log(this.jugadorSeleccionado1);
  }

  onSeleccionarJugador2(event: any){
    const seleccion = event.target.value;
    this.jugadorSeleccionado2 = seleccion !== "1" ? seleccion : null;
    console.log(this.jugadorSeleccionado2);
  }

  onSeleccionarJugador3(event: any){
    const seleccion = event.target.value;
    this.jugadorSeleccionado3 = seleccion !== "1" ? seleccion : null;
    console.log(this.jugadorSeleccionado3);
  }

  empezarPartida(): void{
    if (this.jugadorSeleccionado1) this.jugadoresSeleccionados.push(this.jugadorSeleccionado1);
    if (this.jugadorSeleccionado2) this.jugadoresSeleccionados.push(this.jugadorSeleccionado2);
    if (this.jugadorSeleccionado3) this.jugadoresSeleccionados.push(this.jugadorSeleccionado3);
    this.datos.setJugadores(this.jugadoresSeleccionados);
  }
  
}
