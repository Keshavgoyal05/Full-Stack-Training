import { Pipe, PipeTransform } from '@angular/core';
import { ProductService } from './product.service';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, name:any):any {
    console.log("filter impure");
    try{
      if(name == '')
      {
        return value;
      }
      return value.filter((user:any) => user.firstName.startsWith(name));
    }
    catch{
      if(name == '')
      {
        return value;
      }
      return value.filter( (arrProdutsObjs:any) => 
      ((String(arrProdutsObjs.productId).startsWith(name)) || (arrProdutsObjs.productName.startsWith(name))) 
      );

    }
  }

}
