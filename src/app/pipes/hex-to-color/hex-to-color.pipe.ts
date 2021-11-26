import { Pipe, PipeTransform } from '@angular/core';
import { GetColorName } from 'hex-color-to-color-name';
const blinder = require('color-blind');

@Pipe({
  name: 'hexToColor',
})
export class HexToColorPipe implements PipeTransform {
  transform(value: string): string {
    const colorName = GetColorName(value);
    return colorName;
  }
}
