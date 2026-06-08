// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

import { AbstractControl } from "@angular/forms";

 
// export function PasswordMatchValidator() : ValidatorFn {
     
//  return (control: AbstractControl) : ValidationErrors | null =>{

//    const password = control.get('password');
//    const confirmPassword = control.get('confirmPassword');

//    if(!password || !confirmPassword){
//         return null;
//    }
//    return password.value === confirmPassword.value ? null : {passwordMismatch :  true};
//  }
   
// }
export class CustomValidators{
   static PasswordMatchValidator(control: AbstractControl) {
        const password = control.get('password')
        const confirmPassword = control.get('confirmPassword')
        if(!password || !confirmPassword){
            return null;
        }
        if(password.value != confirmPassword.value){
            return {passwordMismatch: true}
        }
        return  null;
    }
}