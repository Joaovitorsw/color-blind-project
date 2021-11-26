import { Pipe, PipeTransform } from '@angular/core';
const blinder = require('color-blind');

@Pipe({
  name: 'blinder',
})
export class BlinderPipe implements PipeTransform {
  transform(value: string, args: string): string {
    if (args === 'normal') return value;
    return blinder[args](value);
  }
}
