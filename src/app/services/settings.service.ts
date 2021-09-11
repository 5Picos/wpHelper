import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Settings } from '../models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private key: string = "5picos.wpHelper";

  private savedOptions: Settings = {
    darkMode: false,
    prefix: "0",
  }

  public darkMode: boolean = this.savedOptions.darkMode;
  public prefix: string = this.savedOptions.prefix;

  constructor(
    private toastController: ToastController,
    private storage: Storage,
  ) { }

  save() : Promise<any> {
    this.savedOptions.darkMode = this.darkMode;
    this.savedOptions.prefix = this.prefix;
    let joptions = JSON.stringify(this.savedOptions);

    return this.storage.set(this.key, joptions)
      .catch( (err) => {
        console.log('ERR =>');
        console.log(err);
      })
  }

  get() : Promise<any> {
    return this.storage.get(this.key)
      .then( (data) => {
        if (data != null) {
          this.savedOptions = JSON.parse(data);
        }

        this.darkMode = !!this.savedOptions.darkMode;
        this.prefix = this.savedOptions.prefix.toString();
      })
      .catch( (err) => {
        console.log('get ERR =>');
        console.log(err);
      })
  }

  async setToast(texto: string, duration: number = 1000, position: "top" | "bottom" | "middle" = 'middle') {
    const toast = await this.toastController.create({
      message: texto,
      duration: duration,
      position: position,
    });
    toast.present();
  }
}
