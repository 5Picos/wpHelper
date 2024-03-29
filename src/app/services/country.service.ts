import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private translate: TranslateService,
  ) { }

  getCountries(): Array<Country> {
    var result: Country[] = [
      {prefix: '20', name: this.translate.instant('20'), displayName: "[20] " + this.translate.instant('20')},
      {prefix: '27', name: this.translate.instant('27'), displayName: "[27] " + this.translate.instant('27')},
      {prefix: '30', name: this.translate.instant('30'), displayName: "[30] " + this.translate.instant('30')},
      {prefix: '31', name: this.translate.instant('31'), displayName: "[31] " + this.translate.instant('31')},
      {prefix: '32', name: this.translate.instant('32'), displayName: "[32] " + this.translate.instant('32')},
      {prefix: '33', name: this.translate.instant('33'), displayName: "[33] " + this.translate.instant('33')},
      {prefix: '34', name: this.translate.instant('34'), displayName: "[34] " + this.translate.instant('34')},
      {prefix: '36', name: this.translate.instant('36'), displayName: "[36] " + this.translate.instant('36')},
      {prefix: '39', name: this.translate.instant('39'), displayName: "[39] " + this.translate.instant('39')},
      {prefix: '40', name: this.translate.instant('40'), displayName: "[40] " + this.translate.instant('40')},
      {prefix: '41', name: this.translate.instant('41'), displayName: "[41] " + this.translate.instant('41')},
      {prefix: '43', name: this.translate.instant('43'), displayName: "[43] " + this.translate.instant('43')},
      {prefix: '44', name: this.translate.instant('44'), displayName: "[44] " + this.translate.instant('44')},
      {prefix: '45', name: this.translate.instant('45'), displayName: "[45] " + this.translate.instant('45')},
      {prefix: '46', name: this.translate.instant('46'), displayName: "[46] " + this.translate.instant('46')},
      {prefix: '47', name: this.translate.instant('47'), displayName: "[47] " + this.translate.instant('47')},
      {prefix: '48', name: this.translate.instant('48'), displayName: "[48] " + this.translate.instant('48')},
      {prefix: '49', name: this.translate.instant('49'), displayName: "[49] " + this.translate.instant('49')},
      {prefix: '51', name: this.translate.instant('51'), displayName: "[51] " + this.translate.instant('51')},
      {prefix: '52', name: this.translate.instant('52'), displayName: "[52] " + this.translate.instant('52')},
      {prefix: '53', name: this.translate.instant('53'), displayName: "[53] " + this.translate.instant('53')},
      {prefix: '54', name: this.translate.instant('54'), displayName: "[54] " + this.translate.instant('54')},
      {prefix: '55', name: this.translate.instant('55'), displayName: "[55] " + this.translate.instant('55')},
      {prefix: '56', name: this.translate.instant('56'), displayName: "[56] " + this.translate.instant('56')},
      {prefix: '57', name: this.translate.instant('57'), displayName: "[57] " + this.translate.instant('57')},
      {prefix: '58', name: this.translate.instant('58'), displayName: "[58] " + this.translate.instant('58')},
      {prefix: '60', name: this.translate.instant('60'), displayName: "[60] " + this.translate.instant('60')},
      {prefix: '61', name: this.translate.instant('61'), displayName: "[61] " + this.translate.instant('61')},
      {prefix: '62', name: this.translate.instant('62'), displayName: "[62] " + this.translate.instant('62')},
      {prefix: '63', name: this.translate.instant('63'), displayName: "[63] " + this.translate.instant('63')},
      {prefix: '64', name: this.translate.instant('64'), displayName: "[64] " + this.translate.instant('64')},
      {prefix: '65', name: this.translate.instant('65'), displayName: "[65] " + this.translate.instant('65')},
      {prefix: '66', name: this.translate.instant('66'), displayName: "[66] " + this.translate.instant('66')},
      {prefix: '81', name: this.translate.instant('81'), displayName: "[81] " + this.translate.instant('81')},
      {prefix: '82', name: this.translate.instant('82'), displayName: "[82] " + this.translate.instant('82')},
      {prefix: '84', name: this.translate.instant('84'), displayName: "[84] " + this.translate.instant('84')},
      {prefix: '86', name: this.translate.instant('86'), displayName: "[86] " + this.translate.instant('86')},
      {prefix: '90', name: this.translate.instant('90'), displayName: "[90] " + this.translate.instant('90')},
      {prefix: '91', name: this.translate.instant('91'), displayName: "[91] " + this.translate.instant('91')},
      {prefix: '92', name: this.translate.instant('92'), displayName: "[92] " + this.translate.instant('92')},
      {prefix: '93', name: this.translate.instant('93'), displayName: "[93] " + this.translate.instant('93')},
      {prefix: '94', name: this.translate.instant('94'), displayName: "[94] " + this.translate.instant('94')},
      {prefix: '95', name: this.translate.instant('95'), displayName: "[95] " + this.translate.instant('95')},
      {prefix: '98', name: this.translate.instant('98'), displayName: "[98] " + this.translate.instant('98')},
      {prefix: '211', name: this.translate.instant('211'), displayName: "[211] " + this.translate.instant('211')},
      {prefix: '212', name: this.translate.instant('212'), displayName: "[212] " + this.translate.instant('212')},
      {prefix: '213', name: this.translate.instant('213'), displayName: "[213] " + this.translate.instant('213')},
      {prefix: '216', name: this.translate.instant('216'), displayName: "[216] " + this.translate.instant('216')},
      {prefix: '218', name: this.translate.instant('218'), displayName: "[218] " + this.translate.instant('218')},
      {prefix: '220', name: this.translate.instant('220'), displayName: "[220] " + this.translate.instant('220')},
      {prefix: '221', name: this.translate.instant('221'), displayName: "[221] " + this.translate.instant('221')},
      {prefix: '222', name: this.translate.instant('222'), displayName: "[222] " + this.translate.instant('222')},
      {prefix: '223', name: this.translate.instant('223'), displayName: "[223] " + this.translate.instant('223')},
      {prefix: '224', name: this.translate.instant('224'), displayName: "[224] " + this.translate.instant('224')},
      {prefix: '225', name: this.translate.instant('225'), displayName: "[225] " + this.translate.instant('225')},
      {prefix: '226', name: this.translate.instant('226'), displayName: "[226] " + this.translate.instant('226')},
      {prefix: '227', name: this.translate.instant('227'), displayName: "[227] " + this.translate.instant('227')},
      {prefix: '228', name: this.translate.instant('228'), displayName: "[228] " + this.translate.instant('228')},
      {prefix: '229', name: this.translate.instant('229'), displayName: "[229] " + this.translate.instant('229')},
      {prefix: '230', name: this.translate.instant('230'), displayName: "[230] " + this.translate.instant('230')},
      {prefix: '231', name: this.translate.instant('231'), displayName: "[231] " + this.translate.instant('231')},
      {prefix: '232', name: this.translate.instant('232'), displayName: "[232] " + this.translate.instant('232')},
      {prefix: '233', name: this.translate.instant('233'), displayName: "[233] " + this.translate.instant('233')},
      {prefix: '234', name: this.translate.instant('234'), displayName: "[234] " + this.translate.instant('234')},
      {prefix: '235', name: this.translate.instant('235'), displayName: "[235] " + this.translate.instant('235')},
      {prefix: '236', name: this.translate.instant('236'), displayName: "[236] " + this.translate.instant('236')},
      {prefix: '237', name: this.translate.instant('237'), displayName: "[237] " + this.translate.instant('237')},
      {prefix: '238', name: this.translate.instant('238'), displayName: "[238] " + this.translate.instant('238')},
      {prefix: '239', name: this.translate.instant('239'), displayName: "[239] " + this.translate.instant('239')},
      {prefix: '240', name: this.translate.instant('240'), displayName: "[240] " + this.translate.instant('240')},
      {prefix: '241', name: this.translate.instant('241'), displayName: "[241] " + this.translate.instant('241')},
      {prefix: '242', name: this.translate.instant('242'), displayName: "[242] " + this.translate.instant('242')},
      {prefix: '243', name: this.translate.instant('243'), displayName: "[243] " + this.translate.instant('243')},
      {prefix: '244', name: this.translate.instant('244'), displayName: "[244] " + this.translate.instant('244')},
      {prefix: '245', name: this.translate.instant('245'), displayName: "[245] " + this.translate.instant('245')},
      {prefix: '248', name: this.translate.instant('248'), displayName: "[248] " + this.translate.instant('248')},
      {prefix: '249', name: this.translate.instant('249'), displayName: "[249] " + this.translate.instant('249')},
      {prefix: '250', name: this.translate.instant('250'), displayName: "[250] " + this.translate.instant('250')},
      {prefix: '251', name: this.translate.instant('251'), displayName: "[251] " + this.translate.instant('251')},
      {prefix: '252', name: this.translate.instant('252'), displayName: "[252] " + this.translate.instant('252')},
      {prefix: '253', name: this.translate.instant('253'), displayName: "[253] " + this.translate.instant('253')},
      {prefix: '254', name: this.translate.instant('254'), displayName: "[254] " + this.translate.instant('254')},
      {prefix: '255', name: this.translate.instant('255'), displayName: "[255] " + this.translate.instant('255')},
      {prefix: '256', name: this.translate.instant('256'), displayName: "[256] " + this.translate.instant('256')},
      {prefix: '257', name: this.translate.instant('257'), displayName: "[257] " + this.translate.instant('257')},
      {prefix: '258', name: this.translate.instant('258'), displayName: "[258] " + this.translate.instant('258')},
      {prefix: '260', name: this.translate.instant('260'), displayName: "[260] " + this.translate.instant('260')},
      {prefix: '261', name: this.translate.instant('261'), displayName: "[261] " + this.translate.instant('261')},
      {prefix: '263', name: this.translate.instant('263'), displayName: "[263] " + this.translate.instant('263')},
      {prefix: '264', name: this.translate.instant('264'), displayName: "[264] " + this.translate.instant('264')},
      {prefix: '265', name: this.translate.instant('265'), displayName: "[265] " + this.translate.instant('265')},
      {prefix: '266', name: this.translate.instant('266'), displayName: "[266] " + this.translate.instant('266')},
      {prefix: '267', name: this.translate.instant('267'), displayName: "[267] " + this.translate.instant('267')},
      {prefix: '268', name: this.translate.instant('268'), displayName: "[268] " + this.translate.instant('268')},
      {prefix: '269', name: this.translate.instant('269'), displayName: "[269] " + this.translate.instant('269')},
      {prefix: '291', name: this.translate.instant('291'), displayName: "[291] " + this.translate.instant('291')},
      {prefix: '351', name: this.translate.instant('351'), displayName: "[351] " + this.translate.instant('351')},
      {prefix: '352', name: this.translate.instant('352'), displayName: "[352] " + this.translate.instant('352')},
      {prefix: '353', name: this.translate.instant('353'), displayName: "[353] " + this.translate.instant('353')},
      {prefix: '354', name: this.translate.instant('354'), displayName: "[354] " + this.translate.instant('354')},
      {prefix: '355', name: this.translate.instant('355'), displayName: "[355] " + this.translate.instant('355')},
      {prefix: '356', name: this.translate.instant('356'), displayName: "[356] " + this.translate.instant('356')},
      {prefix: '357', name: this.translate.instant('357'), displayName: "[357] " + this.translate.instant('357')},
      {prefix: '358', name: this.translate.instant('358'), displayName: "[358] " + this.translate.instant('358')},
      {prefix: '359', name: this.translate.instant('359'), displayName: "[359] " + this.translate.instant('359')},
      {prefix: '370', name: this.translate.instant('370'), displayName: "[370] " + this.translate.instant('370')},
      {prefix: '371', name: this.translate.instant('371'), displayName: "[371] " + this.translate.instant('371')},
      {prefix: '372', name: this.translate.instant('372'), displayName: "[372] " + this.translate.instant('372')},
      {prefix: '373', name: this.translate.instant('373'), displayName: "[373] " + this.translate.instant('373')},
      {prefix: '374', name: this.translate.instant('374'), displayName: "[374] " + this.translate.instant('374')},
      {prefix: '375', name: this.translate.instant('375'), displayName: "[375] " + this.translate.instant('375')},
      {prefix: '376', name: this.translate.instant('376'), displayName: "[376] " + this.translate.instant('376')},
      {prefix: '377', name: this.translate.instant('377'), displayName: "[377] " + this.translate.instant('377')},
      {prefix: '378', name: this.translate.instant('378'), displayName: "[378] " + this.translate.instant('378')},
      {prefix: '380', name: this.translate.instant('380'), displayName: "[380] " + this.translate.instant('380')},
      {prefix: '381', name: this.translate.instant('381'), displayName: "[381] " + this.translate.instant('381')},
      {prefix: '382', name: this.translate.instant('382'), displayName: "[382] " + this.translate.instant('382')},
      {prefix: '385', name: this.translate.instant('385'), displayName: "[385] " + this.translate.instant('385')},
      {prefix: '386', name: this.translate.instant('386'), displayName: "[386] " + this.translate.instant('386')},
      {prefix: '387', name: this.translate.instant('387'), displayName: "[387] " + this.translate.instant('387')},
      {prefix: '389', name: this.translate.instant('389'), displayName: "[389] " + this.translate.instant('389')},
      {prefix: '420', name: this.translate.instant('420'), displayName: "[420] " + this.translate.instant('420')},
      {prefix: '421', name: this.translate.instant('421'), displayName: "[421] " + this.translate.instant('421')},
      {prefix: '423', name: this.translate.instant('423'), displayName: "[423] " + this.translate.instant('423')},
      {prefix: '501', name: this.translate.instant('501'), displayName: "[501] " + this.translate.instant('501')},
      {prefix: '502', name: this.translate.instant('502'), displayName: "[502] " + this.translate.instant('502')},
      {prefix: '503', name: this.translate.instant('503'), displayName: "[503] " + this.translate.instant('503')},
      {prefix: '504', name: this.translate.instant('504'), displayName: "[504] " + this.translate.instant('504')},
      {prefix: '505', name: this.translate.instant('505'), displayName: "[505] " + this.translate.instant('505')},
      {prefix: '506', name: this.translate.instant('506'), displayName: "[506] " + this.translate.instant('506')},
      {prefix: '507', name: this.translate.instant('507'), displayName: "[507] " + this.translate.instant('507')},
      {prefix: '509', name: this.translate.instant('509'), displayName: "[509] " + this.translate.instant('509')},
      {prefix: '591', name: this.translate.instant('591'), displayName: "[591] " + this.translate.instant('591')},
      {prefix: '592', name: this.translate.instant('592'), displayName: "[592] " + this.translate.instant('592')},
      {prefix: '593', name: this.translate.instant('593'), displayName: "[593] " + this.translate.instant('593')},
      {prefix: '595', name: this.translate.instant('595'), displayName: "[595] " + this.translate.instant('595')},
      {prefix: '597', name: this.translate.instant('597'), displayName: "[597] " + this.translate.instant('597')},
      {prefix: '598', name: this.translate.instant('598'), displayName: "[598] " + this.translate.instant('598')},
      {prefix: '670', name: this.translate.instant('670'), displayName: "[670] " + this.translate.instant('670')},
      {prefix: '673', name: this.translate.instant('673'), displayName: "[673] " + this.translate.instant('673')},
      {prefix: '674', name: this.translate.instant('674'), displayName: "[674] " + this.translate.instant('674')},
      {prefix: '675', name: this.translate.instant('675'), displayName: "[675] " + this.translate.instant('675')},
      {prefix: '676', name: this.translate.instant('676'), displayName: "[676] " + this.translate.instant('676')},
      {prefix: '677', name: this.translate.instant('677'), displayName: "[677] " + this.translate.instant('677')},
      {prefix: '678', name: this.translate.instant('678'), displayName: "[678] " + this.translate.instant('678')},
      {prefix: '679', name: this.translate.instant('679'), displayName: "[679] " + this.translate.instant('679')},
      {prefix: '680', name: this.translate.instant('680'), displayName: "[680] " + this.translate.instant('680')},
      {prefix: '685', name: this.translate.instant('685'), displayName: "[685] " + this.translate.instant('685')},
      {prefix: '686', name: this.translate.instant('686'), displayName: "[686] " + this.translate.instant('686')},
      {prefix: '688', name: this.translate.instant('688'), displayName: "[688] " + this.translate.instant('688')},
      {prefix: '691', name: this.translate.instant('691'), displayName: "[691] " + this.translate.instant('691')},
      {prefix: '692', name: this.translate.instant('692'), displayName: "[692] " + this.translate.instant('692')},
      {prefix: '850', name: this.translate.instant('850'), displayName: "[850] " + this.translate.instant('850')},
      {prefix: '855', name: this.translate.instant('855'), displayName: "[855] " + this.translate.instant('855')},
      {prefix: '856', name: this.translate.instant('856'), displayName: "[856] " + this.translate.instant('856')},
      {prefix: '880', name: this.translate.instant('880'), displayName: "[880] " + this.translate.instant('880')},
      {prefix: '960', name: this.translate.instant('960'), displayName: "[960] " + this.translate.instant('960')},
      {prefix: '961', name: this.translate.instant('961'), displayName: "[961] " + this.translate.instant('961')},
      {prefix: '962', name: this.translate.instant('962'), displayName: "[962] " + this.translate.instant('962')},
      {prefix: '963', name: this.translate.instant('963'), displayName: "[963] " + this.translate.instant('963')},
      {prefix: '964', name: this.translate.instant('964'), displayName: "[964] " + this.translate.instant('964')},
      {prefix: '965', name: this.translate.instant('965'), displayName: "[965] " + this.translate.instant('965')},
      {prefix: '966', name: this.translate.instant('966'), displayName: "[966] " + this.translate.instant('966')},
      {prefix: '967', name: this.translate.instant('967'), displayName: "[967] " + this.translate.instant('967')},
      {prefix: '968', name: this.translate.instant('968'), displayName: "[968] " + this.translate.instant('968')},
      {prefix: '971', name: this.translate.instant('971'), displayName: "[971] " + this.translate.instant('971')},
      {prefix: '972', name: this.translate.instant('972'), displayName: "[972] " + this.translate.instant('972')},
      {prefix: '973', name: this.translate.instant('973'), displayName: "[973] " + this.translate.instant('973')},
      {prefix: '974', name: this.translate.instant('974'), displayName: "[974] " + this.translate.instant('974')},
      {prefix: '975', name: this.translate.instant('975'), displayName: "[975] " + this.translate.instant('975')},
      {prefix: '976', name: this.translate.instant('976'), displayName: "[976] " + this.translate.instant('976')},
      {prefix: '977', name: this.translate.instant('977'), displayName: "[977] " + this.translate.instant('977')},
      {prefix: '992', name: this.translate.instant('992'), displayName: "[992] " + this.translate.instant('992')},
      {prefix: '993', name: this.translate.instant('993'), displayName: "[993] " + this.translate.instant('993')},
      {prefix: '994', name: this.translate.instant('994'), displayName: "[994] " + this.translate.instant('994')},
      {prefix: '995', name: this.translate.instant('995'), displayName: "[995] " + this.translate.instant('995')},
      {prefix: '996', name: this.translate.instant('996'), displayName: "[996] " + this.translate.instant('996')},
      {prefix: '998', name: this.translate.instant('998'), displayName: "[998] " + this.translate.instant('998')},
    ];

    result.sort( (a, b) => ( a.name > b.name ) ? 1 : -1);
    result.unshift(new Country('0', this.translate.instant('0'), this.translate.instant('0')))

    return result;
  }
}
