import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

  transform(value: string, saludo:string, descripcion:string): string {
    return `${saludo} ${value.toUpperCase()} ${descripcion}`;
  }

}
