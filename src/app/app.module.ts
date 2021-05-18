import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// No estaria funcionando
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/idiomas/', '.json');
}

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'db_wpHelper',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
