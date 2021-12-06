import { Pipe, PipeTransform, ElementRef, ViewChild} from '@angular/core';

@Pipe({
  name: 'purepipe',
  pure: true
})
export class PurepipePipe implements PipeTransform {

  transform(value: number): string {
    console.log("pure");
    return "From purepipe in transform function value is : "+value;
  }

}
