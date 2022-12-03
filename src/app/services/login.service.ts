import { Injectable } from '@angular/core';
import { Subject,Observable } from "rxjs";
import { IPersona } from '../interfaces/persona.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // promesas -> Observables
  // Promesas resolve - then
  // Observables respuesta - suscripcion;

  persona$: Subject<IPersona>;

  constructor() { 
    this.persona$ = new Subject<IPersona>;
  }

  getPersona$(): Observable<IPersona> {
    return this.persona$.asObservable();
  }

  login(persona:IPersona){
    this.persona$.next(persona);
  }

}
