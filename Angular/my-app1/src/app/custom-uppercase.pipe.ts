import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform {

  transform(value: string): string {
    const arr = value.split(" ");
    for (var i = 0; i < arr.length; i++) 
    {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const result = arr.join(" ");
    return result;
  }

}
