import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Validations } from '../models/validations';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(
    private translate: TranslateService,
  ) { }

  validate(number: string): Validations {
    var result = new Validations();

    if (!number) {
      result.lastMessage = this.translate.instant("ERR_NO_VALUE");
    }

    if (isNaN(+number)) {
      result.lastMessage = this.translate.instant("ERR_NO_NUMBER");
    }

    return result;
  }

  // TODO Translate jaja
  ArgValidate(cellNumber: string): Validations {
    var result = new Validations();
    var tempNumber = cellNumber;

    if (tempNumber.startsWith("549")) {
      tempNumber = cellNumber.substring(3, tempNumber.length);
    }
    else if (tempNumber.startsWith("54")) {
      tempNumber = tempNumber = cellNumber.substring(2, tempNumber.length);;
    }

    // 3516858492 => length = 10
    if (tempNumber.length == 10 && tempNumber[0] == "9") {
      // Ingreso un numero con el 9 pero no es valido porque tiene lng = 10 en vez de 11
      result.lastMessage = "Número incorrecto: falta un número \nAl seleccionar el pais no requiere el 9";
    }

    if (tempNumber.length == 11 && tempNumber[0] != "9") {
      // Ingreso un numero sin el 9 pero no es valido porque tiene lng = 11 en vez de 10
      result.lastMessage = "Número incorrecto: sobra un número \nAl seleccionar el pais no requiere el 9";
    }

    if (tempNumber.length < 10 || tempNumber.length > 11) {
      // Ingreso un numero que no es un telefono
      result.lastMessage = "Número incorrecto: no es un teléfono";
    }

    return result;
}  
}
