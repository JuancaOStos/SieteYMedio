import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnService {

  data: any;

  constructor(private http: HttpClient) { }
  
  getData(): void{
    this.http.get('https://localhost:7194/Jugadores').subscribe(response => {
      this.data = response;
      console.log(this.data);
    })
  }
}
