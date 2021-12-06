import { Injectable } from '@angular/core';
import { Products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  arrProducts = [ 
    new Products(101, "TV", 45000), 
    new Products(102, "Laptop", 65000), 
    new Products (103, "Mobile", 32000), 
    new Products (104, "Sports watch", 3000) ]

  getAllProducts() { return this.arrProducts; }

  getProductsOnId(productId : number){
    return this.arrProducts.filter(product => product.productId==productId);
  }

  addProduct(p:Products)
  {
    this.arrProducts.push(p);
  }

  deleteProduct(id:number)
  {
    var index = this.arrProducts.findIndex(function(o){
      return o.productId == id;});
    this.arrProducts.splice(index, 1);
    //console.log(this.arrProducts); 
  }

}
