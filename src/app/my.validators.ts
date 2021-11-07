import {FormControl} from '@angular/forms'
import {Observable} from 'rxjs'

export class MyValidators {

  static restrictedEmails(control: FormControl): {[key: string]: boolean} | null {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true}
    }
    return null
  }

  static uniqEmail(control: FormControl): Promise<any|null> | Observable<any|null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      }, 1000)
    })
  }

}
