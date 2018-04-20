import { Pipe, PipeTransform } from '@angular/core'
import { CurrencyPipe } from '@angular/common';;


@Pipe({
  name: 'confidential'
})
export class ConfidentialPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe){}

  transform(value: number, max : number=1000): any {
    return value > max ? 'CONFIDENTIAL' : this.currencyPipe.transform(value, 'EUR', 'symbol');
  }

}
