import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log (type : string, componentName: string, functionName: string, msg : any) { 
    let messageForLoggin = `${type} : ${new  Date()} : ${componentName} => ${functionName} => Message : ${msg}`;
    console.log (messageForLoggin);
  }
}
