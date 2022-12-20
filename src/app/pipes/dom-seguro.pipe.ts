import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer){

  }

  transform(valor:string): SafeResourceUrl {
    return this.domSanitazer.bypassSecurityTrustResourceUrl(valor);
  }

}
