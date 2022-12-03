import { Component } from '@angular/core';
import { IPersona } from 'src/app/interfaces/persona.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  persona: IPersona = {} as IPersona;

  constructor(private _serviceLogin : LoginService){
    this._serviceLogin.getPersona$().subscribe((data:IPersona) => {
      this.persona = data;
    });
  }
}
