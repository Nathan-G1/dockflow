import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {
  transform(value: any, _month: any): any {
    const tt = Date.parse(_month);
    const _date = new Date(tt);
    const ui = new Date(value);
    return '' + (ui.getMonth() - _date.getMonth());
  }
}
