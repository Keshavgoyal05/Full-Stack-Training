import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router :Router, private productServiceObj : ProductService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe( (param) =>
    { 
      this.idForProductsRouting= Number(param.get('id')); 
      if (this.idForProductsRouting > 0) 
        this.displayBasedonID();  //http://localhost:4200/products/101
      else 
        this.getAllProducts();      //http://localhost:4200/products
    });
    
  }

  arrProducts : Products[] = []; 

  getAllProducts() { 
    this.arrProducts = this.productServiceObj.getAllProducts(); 
  } 
  
  displayBasedonID() { 
    this.arrProducts = this.productServiceObj.getProductsOnId(this.idForProductsRouting); 
  } 
  
  idForProductsRouting=0; 
  routeBasedonId() //on click of a button, edit box data is taken... 
  { 
    let strURLForProductsFilterById = ""; 
    if (this.idForProductsRouting > 0)
      strURLForProductsFilterById = "products1/"+this.idForProductsRouting; // product1/105 
    this.router.navigate([strURLForProductsFilterById]); //   http://localhost:4200/products1/105 
  } 
  
  dislayAll() 
  { 
    this.idForProductsRouting=0; 
    this.arrProducts = this.productServiceObj.getAllProducts(); 
  }

}
