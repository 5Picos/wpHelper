import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
  ) {
    this.inicializar_traductor();
    this.initializeApp();
  }
  inicializar_traductor() {
    console.log('getBrowserLang: ' + this.translate.getBrowserLang());
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang());
    this.translate.addLangs(['es', 'en']);
  }

  // set

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
