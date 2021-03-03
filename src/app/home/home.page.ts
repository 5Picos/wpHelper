import { Component } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { Pais, SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public numero: number = undefined;
  public paises: Array<Pais>;
  public keyPais: string;
  public darkMode: boolean;
  private subscription: any;

  constructor(
    private toastController: ToastController, 
    private platform: Platform, 
    private settings: SettingsService,
  ) {}

  ngOnInit() {
    this.paises = this.settings.paisList;

    this.settings.get()
      .then( () => {
        this.keyPais = this.settings.pais;
        this.darkMode = this.settings.darkMode;
        this.toggleDarkMode(this.darkMode);
      })
      .catch( (err) => {
        this.settings.setToast("error geting settings" + err);
      });
  }

  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }

  async toggleDarkMode(estado){
    document.body.classList.toggle('dark', estado);
    this.settings.darkMode = estado;
    await this.settings.save();
  }

  change() {
    document.body.classList.toggle('dark', this.darkMode);
    this.settings.darkMode = this.darkMode;
    this.settings.save()
      .catch( (err) => {
        this.settings.setToast("error saving settings" + err);
      });
  }

  async enviar(){
    // Guardo lo seleccionado en el combo pais
    this.settings.pais = this.keyPais;
    await this.settings.save()
      .catch( (err) => {
        this.settings.setToast("error saving settings" + err);
      });

    // validaciones globales
    if (this.numero == null) {
      this.settings.setToast("Ingrese un valor")
      return 0;
    }

    if (isNaN(this.numero)) {
      this.settings.setToast("Ingrese un número")
      return 0;
    }

    let n = this.numero.toString().replace(/ /g, "")

    // validaciones solo para argentina, el resto ni idea
    if (this.keyPais == "54") {

      // 3516858492 => length = 10
      if (n.length == 10 && n[0] == "9") {
        // Ingreso un numero con el 9 pero no es valido porque tiene lng = 10 en vez de 11
        this.settings.setToast("Número incorrecto: falta un número \nAl seleccionar el pais no requiere el 9");
        return 0;
      }
  
      if (n.length == 11 && n[0] != "9") {
        // Ingreso un numero sin el 9 pero no es valido porque tiene lng = 11 en vez de 10
        this.settings.setToast("Número incorrecto: sobra un número \nAl seleccionar el pais no requiere el 9");
        return 0;
      }
  
      if (n.length < 10 || n.length > 11) {
        // Ingreso un numero que no es un telefono
        this.settings.setToast("Número incorrecto: no es un teléfono")
        return 0;
      }

      // Validaciones OK
      if (n.length == 11) {
        n = "54" + n;
      } else {
        n = "549" + n; 
      }
    } else {
      n = this.getCodigoPais() + n;
    }

    window.open("https://api.whatsapp.com/send?phone=" + n);
  }

  private getCodigoPais(): string {
    if (this.keyPais == "0") return "";
    return this.keyPais;
  }

  exit() {
    navigator['app'].exitApp();
  }
}
