import { AbstractControl } from "@angular/forms";

export function customerPasswordValidation(control: AbstractControl) {
    //  const password: string = control.value;
   console.log("password", control.value);
   if (control.value && control.value.toLowerCase().includes("password")) {
       return { weakPassword: true };
   }
   return null;
}