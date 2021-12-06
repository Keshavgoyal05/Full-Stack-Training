import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, name:any):any {
    if(name == '')
      {
        return value;
      }
    return value.filter( (users:any) => 
      ((String(users.id).startsWith(name)) || (users.firstName.toLowerCase().startsWith(name.toLowerCase()))) 
    );
    
  }

}
