import { Injectable, Type } from '@angular/core';
import { ToastController } from '@ionic/angular';

// No esta funcionando
// import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { Storage } from '@ionic/storage';

export interface Pais {
  key: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private key: string = "5picos.wpHelper";
  private options: any = {'darkMode' : false, 'pais' : '0'}

  public darkMode: boolean = false;
  public pais: string = '0';

  constructor(
    private toastController: ToastController,
    // private nativeStorage: NativeStorage,
    private storage: Storage,
  ) { }

  // Native Storage
  // save() : Promise<any> {
  //   this.options.darkMode = this.darkMode;
  //   this.options.pais = this.pais;

  //   console.log('GUARDAR:');
  //   console.log(this.options);
  //   return this.nativeStorage.setItem(this.key, this.options)
  //     .catch( (err) => {
  //       console.log('ERR =>');
  //       console.log(err);
  //     })
  // }

  save() : Promise<any> {
    this.options.darkMode = this.darkMode;
    this.options.pais = this.pais;

    console.log('GUARDAR:');
    console.log('options');
    console.log(this.options);

    let joptions = JSON.stringify(this.options);
    console.log('stringify');
    console.log(joptions);

    return this.storage.set(this.key, joptions)
      .catch( (err) => {
        console.log('ERR =>');
        console.log(err);
      })
  }

  // Native Storage
  // get() : Promise<any> {
  //   return this.nativeStorage.getItem(this.key)
  //     .then( (data) => {
  //       console.log('OBTENER');
  //       console.log(data);
        
  //       this.darkMode = !!data.darkMode;
  //       this.pais = data.pais;
  //     })
  //     .catch( (err) => {
  //       console.log('get ERR =>');
  //       console.log(err);
  //     })
  // }

  get() : Promise<any> {
    return this.storage.get(this.key)
      .then( (data) => {
        console.log('OBTENER');
        console.log(data);

        if (data != null) {
          this.options = JSON.parse(data);
        }

        this.darkMode = !!this.options.darkMode;
        this.pais = this.options.pais;
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

  public paisList: Pais[] = [
    {key: '0', value: 'Ninguno'},
    // {key: '20', value: 'Egipto'},
    // {key: '27', value: 'Sudáfrica'},
    // {key: '30', value: 'Grecia'},
    // {key: '31', value: 'Países Bajos'},
    // {key: '32', value: 'Bélgica'},
    // {key: '33', value: 'Francia'},
    // {key: '34', value: 'España'},
    // {key: '36', value: 'Hungría'},
    // {key: '39', value: 'Italia'},
    // {key: '40', value: 'Rumania'},
    // {key: '41', value: 'Suiza'},
    // {key: '43', value: 'Austria'},
    // {key: '44', value: 'Reino Unido'},
    // {key: '45', value: 'Dinamarca'},
    // {key: '46', value: 'Suecia'},
    // {key: '47', value: 'Noruega'},
    // {key: '48', value: 'Polonia'},
    // {key: '49', value: 'Alemania'},
    // {key: '51', value: 'Perú'},
    // {key: '52', value: 'México'},
    // {key: '53', value: 'Cuba'},
    {key: '54', value: 'Argentina'},
    {key: '55', value: 'Brasil'},
    // {key: '56', value: 'Chile'},
    // {key: '57', value: 'Colombia'},
    // {key: '58', value: 'Venezuela'},
    // {key: '60', value: 'Malasia'},
    // {key: '61', value: 'Australia'},
    // {key: '62', value: 'Indonesia'},
    // {key: '63', value: 'Filipinas'},
    // {key: '64', value: 'Nueva Zelanda'},
    // {key: '65', value: 'Singapur'},
    // {key: '66', value: 'Tailandia'},
    // {key: '81', value: 'Japón'},
    // {key: '82', value: 'Corea del Sur'},
    // {key: '84', value: 'Vietnam'},
    // {key: '86', value: 'China'},
    // {key: '90', value: 'Turquía'},
    // {key: '91', value: 'India'},
    // {key: '92', value: 'Pakistán'},
    // {key: '93', value: 'Afganistán'},
    // {key: '94', value: 'Sri Lanka'},
    // {key: '95', value: 'Myanmar'},
    {key: '98', value: 'Irán'},
    // {key: '211', value: 'Sudán del Sur'},
    // {key: '212', value: 'Marruecos'},
    // {key: '213', value: 'Argelia'},
    // {key: '216', value: 'Túnez'},
    // {key: '218', value: 'Libia'},
    // {key: '220', value: 'Gambia'},
    // {key: '221', value: 'Senegal'},
    // {key: '222', value: 'Mauritania'},
    // {key: '223', value: 'Malí'},
    // {key: '224', value: 'Guinea'},
    // {key: '225', value: 'Costa de Marfil'},
    // {key: '226', value: 'Burkina Faso'},
    // {key: '227', value: 'Niger'},
    // {key: '228', value: 'Togo'},
    // {key: '229', value: 'Benin'},
    // {key: '230', value: 'Mauricio'},
    // {key: '231', value: 'Liberia'},
    // {key: '232', value: 'Sierra Leona'},
    // {key: '233', value: 'Ghana'},
    // {key: '234', value: 'Nigeria'},
    // {key: '235', value: 'Chad'},
    // {key: '236', value: 'República Centroafricana'},
    // {key: '237', value: 'Camerún'},
    // {key: '238', value: 'Cabo Verde'},
    // {key: '239', value: 'Santo Tomé y Príncipe'},
    // {key: '240', value: 'Guinea Ecuatorial'},
    // {key: '241', value: 'Gabón'},
    // {key: '242', value: 'República del Congo'},
    // {key: '243', value: 'República Democratica del Congo'},
    // {key: '244', value: 'Angola'},
    // {key: '245', value: 'Guinea-Bisáu'},
    // {key: '248', value: 'Seychelles'},
    // {key: '249', value: 'Sudán'},
    // {key: '250', value: 'Ruanda'},
    // {key: '251', value: 'Etiopía'},
    // {key: '252', value: 'Somalia'},
    // {key: '253', value: 'Yibuti'},
    // {key: '254', value: 'Kenia'},
    // {key: '255', value: 'Tanzania'},
    // {key: '256', value: 'Uganda'},
    // {key: '257', value: 'Burundi'},
    // {key: '258', value: 'Mozambique'},
    // {key: '260', value: 'Zambia'},
    // {key: '261', value: 'Madagascar'},
    // {key: '263', value: 'Zimbabue'},
    // {key: '264', value: 'Namibia'},
    // {key: '265', value: 'Malaui'},
    // {key: '266', value: 'Lesoto'},
    // {key: '267', value: 'Botsuana'},
    // {key: '268', value: 'Suazilandia'},
    // {key: '269', value: 'Comoras'},
    // {key: '291', value: 'Eritrea'},
    // {key: '351', value: 'Portugal'},
    // {key: '352', value: 'Luxemburgo'},
    // {key: '353', value: 'Irlanda'},
    // {key: '354', value: 'Islandia'},
    // {key: '355', value: 'Albania'},
    // {key: '356', value: 'Malta'},
    // {key: '357', value: 'Chipre'},
    // {key: '358', value: 'Finlandia'},
    // {key: '359', value: 'Bulgaria'},
    // {key: '370', value: 'Lituania'},
    // {key: '371', value: 'Letonia'},
    // {key: '372', value: 'Estonia'},
    // {key: '373', value: 'Moldavia'},
    // {key: '374', value: 'Armenia'},
    // {key: '375', value: 'Bielorrusia'},
    // {key: '376', value: 'Andorra'},
    // {key: '377', value: 'Mónaco'},
    // {key: '378', value: 'San Marino'},
    // {key: '380', value: 'Ucrania'},
    // {key: '381', value: 'Serbia'},
    // {key: '382', value: 'Montenegro'},
    // {key: '385', value: 'Croacia'},
    // {key: '386', value: 'Eslovenia'},
    // {key: '387', value: 'Bosnia y Herzegovina'},
    // {key: '389', value: 'Macedonia'},
    // {key: '420', value: 'República Checa'},
    // {key: '421', value: 'Eslovaquia'},
    // {key: '423', value: 'Liechtenstein'},
    // {key: '501', value: 'Belice'},
    // {key: '502', value: 'Guatemala'},
    // {key: '503', value: 'El Salvador'},
    // {key: '504', value: 'Honduras'},
    // {key: '505', value: 'Nicaragua'},
    // {key: '506', value: 'Costa Rica'},
    // {key: '507', value: 'Panamá'},
    // {key: '509', value: 'Haití'},
    // {key: '591', value: 'Bolivia'},
    // {key: '592', value: 'Guyana'},
    // {key: '593', value: 'Ecuador'},
    // {key: '595', value: 'Paraguay'},
    // {key: '597', value: 'Surinam'},
    // {key: '598', value: 'Uruguay'},
    // {key: '670', value: 'Timor Oriental'},
    // {key: '673', value: 'Brunéi'},
    // {key: '674', value: 'Nauru'},
    // {key: '675', value: 'Papúa Nueva Guinea'},
    // {key: '676', value: 'Tonga'},
    // {key: '677', value: 'Islas Salomón'},
    // {key: '678', value: 'Vanuatu'},
    // {key: '679', value: 'Fiji'},
    // {key: '680', value: 'Palaos'},
    // {key: '685', value: 'Samoa'},
    // {key: '686', value: 'Kiribati'},
    // {key: '688', value: 'Tuvalu'},
    // {key: '691', value: 'Micronesia'},
    // {key: '692', value: 'Islas Marshall'},
    // {key: '850', value: 'Corea del Norte'},
    // {key: '855', value: 'Camboya'},
    // {key: '856', value: 'Laos'},
    // {key: '880', value: 'Bangladés'},
    // {key: '960', value: 'Maldivas'},
    // {key: '961', value: 'Líbano'},
    // {key: '962', value: 'Jordania'},
    // {key: '963', value: 'Siria'},
    // {key: '964', value: 'Irak'},
    // {key: '965', value: 'Kuwait'},
    // {key: '966', value: 'Arabia Saudita'},
    // {key: '967', value: 'Yemen'},
    // {key: '968', value: 'Omán'},
    // {key: '971', value: 'Emiratos Árabes Unidos'},
    // {key: '972', value: 'Israel'},
    // {key: '973', value: 'Baréin'},
    // {key: '974', value: 'Catar'},
    // {key: '975', value: 'Bután'},
    // {key: '976', value: 'Mongolia'},
    // {key: '977', value: 'Nepal'},
    // {key: '992', value: 'Tayikistán'},
    // {key: '993', value: 'Turkmenistán'},
    // {key: '994', value: 'Azerbaiyán'},
    // {key: '995', value: 'Georgia'},
    // {key: '996', value: 'Kirguistán'},
    // {key: '998', value: 'Uzbekistán'},
    ];

}
