import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true,
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean = false): 'Puede volar' | 'No puede volar' {
    return (value)
    ? 'Puede volar'
    : 'No puede volar';
  }

}
