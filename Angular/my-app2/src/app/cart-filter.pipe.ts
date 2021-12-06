import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from './cart';

@Pipe({
  name: 'cartFilter',
  pure: false
})
export class CartFilterPipe implements PipeTransform {

  transform(value: Cart[]): number {
    return value.reduce((sum, item) => sum + (item.price*item.quantity), 0);;
  }

}
