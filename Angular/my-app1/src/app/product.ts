export class Products { 
    productId : number=0; 
    productName : string=""; 
    cost : number=0; 
    constructor (productId : number, productName : string, cost : number) 
    { 
        this.productId = productId; 
        this.productName = productName; 
        this.cost = cost; 
    } 
}