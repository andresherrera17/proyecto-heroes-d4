import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit, OnDestroy{

  formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){
    
  }

  ngOnInit(): void {
    console.log('Componente init');
    this.buildForm();
  }

  ngOnDestroy(): void {
    console.log('Componente DESTRUIDO');
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
      contrasena: ['']
    });
  }

  guardar(){

    console.log(this.formGroup);
  }
}
