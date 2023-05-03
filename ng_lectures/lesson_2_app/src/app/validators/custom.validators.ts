import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {

  static canNotStartWthHash (control: AbstractControl): ValidationErrors | null {
    let value = control?.value;
    if ((value as string).startsWith('#')){
      return {canNotStartWthHash: true}
    }
    return null
  }

  static checkAvailability (control: AbstractControl): Promise<ValidationErrors | null> {
    let value = control?.value;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value === 'abc@xyz.com') {
          resolve({alreadyTaken: true})
        }
        else {
          resolve(null)
        }
      }, 5000)
    })
  }
}
