import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localEs from "@angular/common/locales/es";
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//archivo rutas
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './components/formularios/formulario-reactivos/formulario-reactivos.component';

//pipes
import { MayusculaPipe } from './pipes/mayuscula.pipe';

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
    FormsModule,
    ReactiveFormsModule
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
