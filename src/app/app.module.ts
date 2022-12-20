import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localEs from "@angular/common/locales/es";
import { RouterModule } from '@angular/router';


//archivo rutas
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { LoginComponent } from './components/login/login.component';

//pipes
import { MayusculaPipe } from './pipes/mayuscula.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { HijoComponent } from './components/hijo/hijo.component';

registerLocaleData(localEs, 'es');

@NgModule({
  //Declarados todos los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    EjemplosPipesComponent,
    MayusculaPipe,
    LoginComponent,
    DomSeguroPipe,
    HijoComponent
  ],
  //Todas las librerias que utilicemos
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  //Servicios - relacionados con el backend
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  //Cual es el componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
