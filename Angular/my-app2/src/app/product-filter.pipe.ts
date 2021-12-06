import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
  pure : true

})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[],isapply : boolean, selectedSubCategory : string , priceRange : number, sortType : string): Product[] {
    if(isapply){
      console.log("selected sub cartegory is :  " + selectedSubCategory);
      if(selectedSubCategory!="select"){
        value = value.filter(x =>(x.subcategory==selectedSubCategory) && (x.price<=priceRange));
        if(sortType=="ascSort"){
          value = value.sort((a, b) => (a.price) - (b.price));
        }
        else if(sortType=="descSort"){
          value = value.sort((a, b) => (b.price) - (a.price));
        }
      }
      else{
        value = value.filter(x =>(x.price<=priceRange));
        if(sortType=="ascSort"){
          value = value.sort((a, b) => (a.price) - (b.price));
        }
        else if(sortType=="descSort"){
          value = value.sort((a, b) => (b.price) - (a.price));
        }
      }
      
    }
    
    return value;
  }

}
