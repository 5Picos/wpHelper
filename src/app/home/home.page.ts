import { Component } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public numero: number = undefined;
  private subscription: any;

  constructor(private toastController: ToastController, private platform: Platform) {}

  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }

  async enviar(){
    let t;
    let n: string = this.numero.toString();

    if (isNaN(this.numero)) {
      // No ingreso algo numerico
      t = await this.toastController.create({
        message: "Ingrese un número",
        duration: 2000,
        position: "middle",
      });
      t.present();
      return 0;
    }

    if (n.length == 10 && n[0] == "9") {
      // Ingreso un numero con el 9 pero no es valido porque tiene lng = 10
      t = await this.toastController.create({
        message: "Numero incorrecto: falta un número",
        duration: 2000,
        position: "middle",
      });
      t.present();
      return 0;
    }

    if (n.length == 11 && n[0] != "9") {
      // Ingreso un numero sin el 9 pero no es valido porque tiene lng = 11
      t = await this.toastController.create({
        message: "Numero incorrecto: sobra un número",
        duration: 2000,
        position: "middle",
      });
      t.present();
      return 0;
    }

    if (n.length != 11 && n.length != 10) {
      // Ingreso un numero que no es un telefono
      t = await this.toastController.create({
        message: "Numero incorrecto: no es un teléfono",
        duration: 2000,
        position: "middle",
      });
      t.present();
      return 0;

    }

    window.open("https://api.whatsapp.com/send?phone=" + this.getCountryCode() + this.numero);
  }

  private getCountryCode(): string {
    return "54";
  }

  exit() {
    navigator['app'].exitApp();
  }
}
