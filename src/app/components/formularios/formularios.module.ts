import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormularioNgmodelComponent } from './formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './formulario-reactivos/formulario-reactivos.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormularioNgmodelComponent,
    FormularioReactivosComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormulariosModule { }
