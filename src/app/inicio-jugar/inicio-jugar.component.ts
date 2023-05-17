import { Component } from '@angular/core';
import { JugadorComponent } from '../jugador/jugador.component';
import { BancaService } from '../banca.service';
import { DatosService } from '../datos.service';
import { Carta } from '../carta';
import { Jugador } from '../jugador';

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
  nRonda: number = 1;
  bote: number = 0;
  jugadorBanca?: Jugador;
  resultados: string[] = [];
  
  // Esto debe cambiar
  jugadores: Jugador[] = [
    {
      nombre: "",
      //dinero: 20,
      suma: 0,
      turnoTerminado: false,
      banca: false,
      mano: []
    },
    {
      nombre: "",
      //dinero: 20,
      suma: 0,
      turnoTerminado: false,
      banca: false,
      mano: []
    },
    {
      nombre: "",
      //dinero: 20,
      suma: 0,
      turnoTerminado: false,
      banca: false,
      mano: []
    }
  ];
  textoTurno: string = 
  this.jugadores[0].turnoTerminado || 
  this.jugadores[1].turnoTerminado ? 
  "Terminar partida" : "Siguiente turno";

  constructor(private banca: BancaService, private datos: DatosService) {}

  CrearBaraja(): void {
    this.baraja = this.banca.RestablecerBaraja();
    //console.log(this.baraja);
  }

  SacarCarta(): void {
    this.cartaSacada = this.baraja.pop();
    if (this.cartaSacada) this.cartasMesa.push(this.cartaSacada);
    if (this.cartasMesa.length == 1) this.cartasMesa[0].bocaArriba = false;
    this.sumaMesa += this.cartasMesa[this.cartasMesa.length-1].valor;
    if (this.sumaMesa > 7.5) this.sumaMesa = -1;
    //console.log(this.baraja);
    console.log(this.cartaSacada);
    console.log(this.cartasMesa);
    console.log(this.sumaMesa);
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
  /*
  EmpezarRonda(): void {
    this.nRonda++;
    this.jugadores.forEach(j => {
      j.suma = 0;
      //j.turnoTerminado = false;
    });
    this.CrearTurnos(this.jugadores);
  }
*/
  SiguienteTurno(): void{
    for (var i = 0; i < this.jugadores.length; i++){
      /*
      if (!this.jugadores[i].banca && !this.jugadores[i].turnoTerminado){
        this.jugadores[i].suma = this.sumaMesa;
        console.log("" + this.jugadores[i].nombre + " - Suma: " + this.jugadores[i].suma);
        this.jugadores[i].turnoTerminado = true;
        console.log("" + this.jugadores[i].nombre + " - Suma: " + this.jugadores[i].suma);
        i = this.jugadores.length;
      } else if (this.jugadores[i].banca && !this.jugadores[i].turnoTerminado) {
        this.jugadores[i].suma = this.sumaMesa;
        console.log("" + this.jugadores[i].nombre + " - Suma: " + this.jugadores[i].suma);
        this.jugadores[i].turnoTerminado = true;
        i = this.jugadores.length;
      } else {
        if (this.jugadores[i].suma == Math.max(this.jugadores[0].suma, this.jugadores[1].suma, this.jugadores[2].suma)) {
          this.jugadores[i].dinero += this.bote;
        }
      }
      */
     if (!this.jugadores[i].turnoTerminado){
      this.jugadores[i].suma = this.sumaMesa;
      this.jugadores[i].turnoTerminado = true;
      console.log(this.jugadores[i]);
      i = this.jugadores.length;
     }
     /*
      if (!this.jugadores[i].banca){
        if (!this.jugadores[i].turnoTerminado){
          this.jugadores[i].suma = this.sumaMesa;
          this.jugadores[i].turnoTerminado = true;
          i = this.jugadores.length;
        }
      } else {
        if (!this.jugadores[i].turnoTerminado){
          this.jugadores[i].suma = this.sumaMesa;
          this.jugadores[i].turnoTerminado = true;
          i = this.jugadores.length;
        }
      }
      */
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
      /*
      if (j.banca){
        if (j.suma == sumaMax)
        ganador += j.nombre + " "
      }
      */ 
      
    })
    ganador = "Empatan " + ganador.substring(0, ganador.length - 3);
    this.jugadores.forEach(j => {
      if (j.banca && ganador.includes(j.nombre))
      ganador = j.nombre;
    });
    this.resultados[3] = ganador;
    console.log(this.resultados);
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
