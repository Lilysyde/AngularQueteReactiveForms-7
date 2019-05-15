import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isRequiredValidator(controlIdentifiant, controlTitre): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const value1 = control.get(controlIdentifiant).value;
  
      const value2 = control.get(controlTitre).value;

      if ((value1 ==="" && value2==="")) {
        return { 'isRequired': { actual: value1, expected: "L un des deux champs Identifiant ou Titre doit être renseigné"} };
      } else {
        return null;
      }
    };
  }

  export function rangeDateValidator(minDate: Date, maxDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
 
      const date = new Date(control.value); 

      if (date.getTime() < minDate.getTime() || date.getTime()> maxDate.getTime()) {

        return { 'min': { value: control.value, expected: `L année doit être comprise entre ${minDate.getFullYear()} et ${maxDate.getFullYear()}`}};
      } 
      else {
   
        return null;
      }
    };
  }
  