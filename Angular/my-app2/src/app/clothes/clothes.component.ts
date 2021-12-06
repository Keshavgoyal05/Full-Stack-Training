import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  
  constructor(private productService : ProductService,private cartService : CartService) { 
    this.userid =localStorage.getItem('userid');
  }
  userid :any;
  cartid:any;

  ngOnInit(): void {
    this.getAllProducts();
  }

  category="clothes";
  arrProducts : Product[] = [];
  subcategory : any =[]; 
  priceRange : number = 10000;
  selectedSubCategory : string ="select";
  apply : boolean = false;
  radioSelected:any = "";

  getAllProducts() { 
    this.productService.getProducts().subscribe
    ( 
      (data) => 
      { 
        this.arrProducts = data;
        for(var item of this.arrProducts){
          if(item.category==this.category)
            this.subcategory.push(item.subcategory);
        }
        this.subcategory = this.subcategory.filter((x:any, i:any, a:any) => a.indexOf(x) === i)  
      }, 
      (error) => console.log (error)
    ); 
  }
  
  applyFilter(){
    this.apply = true;
  }
  clearFilter(){
    this.apply = false;
    this.selectedSubCategory="select";
    this.priceRange=10000;
    this.radioSelected="";
  }

  addItemToCart(product : Product): void{
    this.cartService.getCartBasedonProduct(product.id).subscribe
    ( 
      (data) => 
      {
        console.log("cart based on product"+data[0]); 
        if(typeof(data[0])!='undefined'){
          var cart = new Cart(this.cartid,this.userid,product.id,product.name,product.category,product.subcategory,product.image,product.price,data[0].quantity+1);
          this.editCartRecord(cart,data[0].id);
        }
        else{
          var cart = new Cart(this.cartid,this.userid,product.id,product.name,product.category,product.subcategory,product.image,product.price,1);
          this.insertDataToCart(cart); 
        }
      }, 
      (error) => console.log (error)
    );
  }

  insertDataToCart(cart :Cart){
    this.cartService.insertData(cart).subscribe 
    ( 
      (data) => 
      { 
        console.log("Inserted data is "+data);
        alert("Item added to Cart successfully");  
      }, 
      (error) => console.log("Unabled to insert record because" + error.getMessage)
    );
  }

  editCartRecord(cart :Cart,cartId: number){
    this.cartService.editData(cart,cartId).subscribe 
    ( 
      (data) => 
      { 
        console.log("Edited data is "+data);
        alert("Item added to Cart successfully");
      }, 
      (error) => console.log("Unabled to insert record because" + error.getMessage)
    ); 

  }
  

}
