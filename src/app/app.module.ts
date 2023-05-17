import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioElegirComponent } from './inicio-elegir/inicio-elegir.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { InicioJugarComponent } from './inicio-jugar/inicio-jugar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JugadorComponent } from './jugador/jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioElegirComponent,
    RegistrarComponent,
    ResultadosComponent,
    InicioJugarComponent,
    NavBarComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
