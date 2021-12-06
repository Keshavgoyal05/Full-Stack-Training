import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, tempType:string): number {
    var iTemperatureToReturn = 0; 
    if(tempType == 'ToCelcius') 
      iTemperatureToReturn = (value - 32)/1.8 ; 
    else if (tempType == 'ToFaren') 
      iTemperatureToReturn = (value * 1.8)+32; 
    return iTemperatureToReturn;
  }

}
