import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurepipe',
  pure: false
})
export class ImpurepipePipe implements PipeTransform {

  transform(value: number): string {
    console.log("impure");
    return "From impurepipe in transform function value is : "+value;
  }

}
