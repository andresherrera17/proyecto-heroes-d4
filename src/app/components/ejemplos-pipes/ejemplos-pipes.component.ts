import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent {

  nombre:string = 'Andres Herrera';
  PI: number = Math.PI;
  porcentaje:number = 0.236;
  salario: number = 1234.5;
  fecha: Date = new Date();

  idiomaFr:string = 'fr';
  idiomaEs:string = 'es';

  generarAlerta(num:number,nombre:string,nombreDos:string){
    this.nombre = 'Tomas Benavides';
    console.log(num,nombre,nombreDos)
  }
}
