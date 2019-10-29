import { Injectable } from '@angular/core';
import { TranslateService as TranslateCoreService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private lang: string;

  constructor(private _translate: TranslateCoreService) {
    this.lang = 'en';
  }

  public changeLang(value: string) {
    if (this.lang == 'en') {
      this._translate.use(value);
      this.lang = value;
    } else {
      this._translate.use('en');
      this.lang = 'en';
    }
  }

  get() {
    return this.lang;
  }

  set(value: string) {
    this.lang = value;
  }

}
