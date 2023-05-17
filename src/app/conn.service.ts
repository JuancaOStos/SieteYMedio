import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnService {

  jugadores: any;
  partidas: any;

  constructor(private http: HttpClient) { }
  
  getJugadores(){
    this.http.get('https://localhost:7066/api/Jugadores').subscribe(response => {
      this.jugadores = response;
      console.log(this.jugadores);
    });
  }

  getPartidas(){
    this.http.get('https://localhost:7066/api/Partidas').subscribe(response => {
      this.partidas = response;
      console.log(this.partidas);
    });
  }

  postJugador(nombre: string): void{
    const body = { nombre: nombre};

    this.http.post('https://localhost:7066/api/Jugadores', body).subscribe();
  }

  postPartida(jugador1: string, jugador2: string, jugador3: string, ganador: string,): void{
    const body = { jugador1: jugador1, jugador2: jugador2, jugador3: jugador3, ganador: ganador,};

    this.http.post('https://localhost:7066/api/Partidas', body).subscribe();
  }
}
