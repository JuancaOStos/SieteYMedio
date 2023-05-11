import { Component } from '@angular/core';
import { JugadorComponent } from '../jugador/jugador.component';
import { BancaService } from '../banca.service';
import { Carta } from '../carta';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-inicio-jugar',
  templateUrl: './inicio-jugar.component.html',
  styleUrls: ['./inicio-jugar.component.css']
})
export class InicioJugarComponent {
  baraja: Carta[] = [];
  cartaSacada?: Carta;
  nRonda: number = 1;
  turnosTerminados: number = 0;

  jugadores: Jugador[] = [
    {
      nombre: "Álvaro",
      dinero: 20,
      suma: 5,
      turnoTerminado: false,
      banca: true
    },
    {
      nombre: "Gisela",
      dinero: 40,
      suma: 5,
      turnoTerminado: false,
      banca: false
    },
    {
      nombre: "Aida",
      dinero: 30,
      suma: 5,
      turnoTerminado: false,
      banca: false
    }
  ];

  constructor(private banca: BancaService) {}

  CrearBaraja(): void {
    this.baraja = this.banca.RestablecerBaraja();
    //console.log(this.baraja);
  }

  SacarCarta(): void {
    this.cartaSacada = this.baraja.pop();
    //console.log(this.baraja);
    console.log(this.cartaSacada);
  }

  SiguienteRonda(): void{
    this.nRonda++;
    console.log(this.nRonda);
  }

  ngOnInit(): void {
    this.CrearBaraja();
  }
}
