export class Cart { 
    id : number = 0;
    userid : number = 0;
    productid : number = 0;
    product_name : string = ""; 
    product_category : string = ""; 
    product_subcategory : string = ""; 
    image : string = "";
    price: number = 0;
    quantity: number = 0;
    constructor (Id : number, userid : number,productid :number, product_name : string,product_category : string, product_subcategory : string,image: string, price :number, quantity : number) 
    { 
        this.id=Id;
        this.userid=userid;
        this.productid=productid;
        this.product_name=product_name;
        this.product_category=product_category;
        this.product_subcategory=product_subcategory;
        this.image=image;
        this.price=price;
        this.quantity=quantity;
    } 
}