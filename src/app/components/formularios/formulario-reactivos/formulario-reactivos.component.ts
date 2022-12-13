import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder,Validators,AbstractControl } from "@angular/forms";


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
      nombre: ['', Validators.required],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', Validators.pattern('[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')],
      contrasena: ['', [Validators.required, this.validarContrasena]]
    });
  }

  validarContrasena(control:AbstractControl){
    const contrasena:string = control.value;
    let error = null;
    if(!contrasena.includes('$')){
      error = { pesos: 'Es requerido el signo $' }
    }
    if(!parseFloat(contrasena[0])){
      error = { ...error, number: 'Es requerido empezar con un numero' }
    }
    return error;
  }


  guardar(){
    console.log(this.formGroup);
  }
}
