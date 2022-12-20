import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() contadorHijo:number = 0;
  @Output() restar: EventEmitter<number> = new EventEmitter() 

  restarDos(){
    this.contadorHijo -= 2;
    this.restar.emit(this.contadorHijo)
  }
}
