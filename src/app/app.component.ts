import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateService as MyTranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private _mytrans: MyTranslateService
  ) {
    this._mytrans.set('en');
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(this._mytrans.get());

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }

  public change() {
    this._mytrans.changeLang('es');
  }
}
