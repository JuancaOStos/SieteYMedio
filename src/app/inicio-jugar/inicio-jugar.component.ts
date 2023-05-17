import { Component } from '@angular/core';
import { JugadorComponent } from '../jugador/jugador.component';
import { BancaService } from '../banca.service';
import { DatosService } from '../datos.service';
import { Carta } from '../carta';
import { Jugador } from '../jugador';
import { ConnService } from '../conn.service';

@Component({
  selector: 'app-inicio-jugar',
  templateUrl: './inicio-jugar.component.html',
  styleUrls: ['./inicio-jugar.component.css']
})
export class InicioJugarComponent {
  baraja: Carta[] = [];
  cartasMesa: Carta[] = [];
  cartaSacada?: Carta;
  hover: boolean = false;
  sumaMesa: number = 0; //Suma de las cartas que hay sobre la mesa en el turno de un jugador
  bote: number = 0;
  jugadorBanca?: Jugador;
  resultados: string[] = [];
  jugadores: Jugador[] = [
    {
      nombre: "",
      suma: 0,
      turnoTerminado: false,
      banca: false
    },
    {
      nombre: "",
      suma: 0,
      turnoTerminado: false,
      banca: false
    },
    {
      nombre: "",
      suma: 0,
      turnoTerminado: false,
      banca: false
    }
  ];
  textoTurno: string = 
  this.jugadores[0].turnoTerminado || 
  this.jugadores[1].turnoTerminado ? 
  "Terminar partida" : "Siguiente turno";

  constructor(private banca: BancaService, private datos: DatosService, private conn: ConnService) {}

  CrearBaraja(): void {
    this.baraja = this.banca.RestablecerBaraja();
  }

  
  SacarCarta(): void {
    this.cartaSacada = this.baraja.pop();
    if (this.cartaSacada) this.cartasMesa.push(this.cartaSacada);
    if (this.cartasMesa.length == 1) this.cartasMesa[0].bocaArriba = false;
    this.sumaMesa += this.cartasMesa[this.cartasMesa.length-1].valor;
    if (this.sumaMesa > 7.5) this.sumaMesa = -1;
  }


  onMouseEnter(carta: Carta){
    if (!this.hover) this.hover = true;
  }


  onMouseLeave(carta: Carta){
    if (this.hover) this.hover = false;
  }


  ngOnInit(): void {
    this.CrearBaraja();
    this.CrearJugadores();
    this.CrearBanca();
    this.CrearTurnos(this.jugadores);
  }


  ngDoCheck(): void{
    this.textoTurno = 
    this.jugadores[0].turnoTerminado && 
    this.jugadores[1].turnoTerminado ? 
    "Terminar partida" : "Siguiente turno";
  }

  CambiarOrientacion(carta: Carta): void{
    console.log(this.baraja);
    if (!carta.bocaArriba) {
      carta.bocaArriba = true;
      this.baraja[this.baraja.length - 1].bocaArriba = false;
    }
    
  }


  SiguienteTurno(): void{
    for (var i = 0; i < this.jugadores.length; i++){
     if (!this.jugadores[i].turnoTerminado){
      this.jugadores[i].suma = this.sumaMesa;
      this.jugadores[i].turnoTerminado = true;
      console.log(this.jugadores[i]);
      i = this.jugadores.length;
     }
    }
    this.cartasMesa = [];
    this.sumaMesa = 0;
    console.log(this.cartasMesa);
  }


  VerResultados(): void{
    let sumaMax: number = Math.max(this.jugadores[0].suma, this.jugadores[1].suma, this.jugadores[2].suma);
    let ganador: string = "";
    this.jugadores.forEach(j => {
      this.resultados.push(j.nombre);
    });
    this.resultados.push("");
    this.jugadores.forEach(j => {
      
      if (j.suma == sumaMax)
      ganador += j.nombre + " y "
    })
    ganador = ganador.substring(0, ganador.length - 3);
    this.jugadores.forEach(j => {
      if (j.banca && ganador.includes(j.nombre))
      ganador = j.nombre;
    });
    this.resultados[3] = ganador;
    console.log(this.resultados);
    this.conn.postPartida(this.resultados[0], this.resultados[1], this.resultados[2], this.resultados[3]);
    this.conn.getPartidas();
  }


  CrearTurnos(jugadores: Jugador[]): void{
    jugadores.forEach(j => {
      if (j.banca){
        this.jugadorBanca = jugadores.splice(jugadores.indexOf(j), 1)[0];
      }
    });
    jugadores.push(this.jugadorBanca as Jugador);
    console.log(this.jugadores);
  }


  CrearBanca(): void{
    let indiceAleatorio: number = Math.floor(Math.random() * this.jugadores.length);
    this.jugadores[indiceAleatorio].banca = true;
  }


  CrearJugadores(): void{
    let jugadores: string[] = this.datos.getJugadores();
    for (var i = 0; i < this.jugadores.length; i++){
      this.jugadores[i].nombre = jugadores[i];
    }
  }


  CambiarTextoTurno(): void{
    this.textoTurno = 
    this.jugadores[0].turnoTerminado || 
    this.jugadores[1].turnoTerminado ? 
    "Terminar partida" : "Siguiente turno";
  
  }
}
