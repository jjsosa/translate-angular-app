import { Component, OnInit, Input } from '@angular/core';
import { TranslateService as MyTranslateService } from '../translate.service';
import { TranslateService as trans2 } from '@ngx-translate/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input() name: string;
  
  constructor(
    private _mytrans: MyTranslateService,
    private _trans2: trans2
  ) { }

  ngOnInit() {
  }

  public change() {
    this._mytrans.changeLang('es');
  }

}
