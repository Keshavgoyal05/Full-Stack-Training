import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static match(password: string): ValidatorFn {
    return (controls: AbstractControl) => {
      var control = controls.get(password);
      var strongRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
      
      if (control?.errors && !control.errors['matching']) {
        return null;
      }
      console.log("strongregex : " +strongRegex + " password : " +control?.value +" : result :" + strongRegex.test(password));
      if(!strongRegex.test(control?.value)){
        controls.get(password)?.setErrors({
        matching: true
        });
      return { matching: true };
      }
      else{
        console.log("strongregex" +strongRegex + " : success");
        return null;  
      }

    };
  }
}