import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength'
})
export class TextLengthPipe implements PipeTransform {

  transform(texto: string, limit = 150): any {
    return (texto.length > limit) ? texto.substr(0, limit) + '...' : texto;
  }

}
