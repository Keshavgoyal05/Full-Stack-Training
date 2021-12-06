import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';
import { Products } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor (private productServiceObj : ProductService){} 

  ngOnInit(): void {
  }
  @Input() strParentToChild='';
  @Input() objectParentToChild:any={};

  @Output() messageToEmit = new EventEmitter(); 
  strData="I am in child"; 
  @Output() objectListToEmit = new EventEmitter();
  productListFromChild:Products[] = this.productServiceObj.getAllProducts();
  sendMessageToParent() 
  { 
    this.messageToEmit.emit(this.strData);
    this.objectListToEmit.emit(this.productListFromChild);
  }

}
