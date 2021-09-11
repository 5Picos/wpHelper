import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '../services/settings.service';

import { IonicSelectableComponent } from 'ionic-selectable';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';
import { ValidateService } from '../services/validate.service';
import { Validations } from '../models/validations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputNumber: string = "";

  countries: Country[] = [];
  country: Country;
  
  darkMode: boolean;
  subscription: any;

  constructor(
    private platform: Platform, 
    private settings: SettingsService,
    private translate: TranslateService,
    private countryService: CountryService,
    private validateService: ValidateService,
  ) { }

  ngOnInit() {
    this.countries = this.countryService.getCountries();
    this.country = this.countries[0];

    this.settings.get()
      .then( () => {
        this.darkMode = this.settings.darkMode;
        this.country = this.countries.find( (x) => x.prefix == this.settings.prefix)

        this.toggleDarkMode(this.darkMode);
      })
      .catch( (err) => {
        this.settings.setToast("error geting settings - " + err);
      });
  }

  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.country = event.value;
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
    this.darkMode = estado;

    this.actualizarDatosSettings();
    this.settings.save()
      .catch( (err) => {
        this.settings.setToast(this.translate.instant("ERR_SAVING") + err);
      });
  }

  changeMode() {
    document.body.classList.toggle('dark', this.darkMode);

    this.actualizarDatosSettings();
    this.settings.save()
      .catch( (err) => {
        this.settings.setToast(this.translate.instant("ERR_SAVING") + err);
      });
  }

  async send() {
    var esArgentina: boolean = this.country.prefix == "54";

    // Guardo lo seleccionado en el combo pais
    this.actualizarDatosSettings();
    this.settings.save()
      .catch( (err) => {
        console.log(err);
        // TODO this.settings.setToast(this.translate.instant("ERR_SAVING") + err);
    });

    // normalizo el input (sacar espacios, guiones)
    let cellNumber = this.inputNumber.toString().replace(/ /g, "");
    cellNumber = cellNumber.replace(/-/g, "");

    // validaciones globales
    var errors: Validations = this.validateService.validate(cellNumber)
    if (errors.hasErrors) {
      this.settings.setToast(errors.lastMessage)
      return;
    }

    // validaciones solo para argentina
    if (esArgentina) {
      errors = this.validateService.ArgValidate(cellNumber);
      if (errors.hasErrors) {
        this.settings.setToast(errors.lastMessage)
        return;
      }
    }

    var selectedPrefix = this.getPrefix();
    if (selectedPrefix && !cellNumber.startsWith(selectedPrefix)) {
      // completar con el prefijo
      if (esArgentina) {
        if (cellNumber.length == 11) {
          cellNumber = "54" + cellNumber;
        } else {
          cellNumber = "549" + cellNumber;         
        }
      }
      else {
        cellNumber = this.getPrefix() + cellNumber;
      }
    }
    window.open("https://api.whatsapp.com/send?phone=" + cellNumber);
  }

  private getPrefix(): string {
    if (this.country.prefix == "0") return "";
    return this.country.prefix;
  }

  exit() {
    navigator['app'].exitApp();
  }

  private actualizarDatosSettings(){
    this.settings.darkMode = this.darkMode;
    this.settings.prefix = this.country.prefix;
  }
}
