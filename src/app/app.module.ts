import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';

import localEs from "@angular/common/locales/es";
import { MayusculaPipe } from './pipes/mayuscula.pipe';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './components/formularios/formulario-reactivos/formulario-reactivos.component';
import { FormsModule } from '@angular/forms';
registerLocaleData(localEs, 'es');

@NgModule({
  //Declarados todos los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    EjemplosPipesComponent,
    MayusculaPipe,
    LoginComponent,
    FormularioNgmodelComponent,
    FormularioReactivosComponent
  ],
  //Todas las librerias que utilicemos
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
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
