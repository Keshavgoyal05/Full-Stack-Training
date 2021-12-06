export class Product { 
    id: number;
    category: string = "";
    subcategory: string = "";
    name: string = "";
    rating: number = 0;
    image: string = "";
    description: string = "";
    available: boolean = false;
    size : number[]=[];
    condition: string = "";
    color: string = "";
    price: number = 0;
    discount: number = 0;
    constructor (Id : number, category: string,subcategory: string, name: string, rating: number, image: string, description: string, available: boolean, size : number[], condition: string, color: string, price: number, discount: number) 
    { 
        this.id=Id;
        this.category=category;
        this.subcategory=subcategory;
        this.name=name;
        this.rating=rating;
        this.image==image;
        this.description=description;
        this.available=available;
        this.size=size;
        this.condition=condition;
        this.color=color;
        this.price=price;
        this.discount=discount;
    } 
}