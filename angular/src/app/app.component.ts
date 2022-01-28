import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  federalHolidays = [
    new Date('2022-01-01T00:00:00.000Z'),
    new Date('2022-01-17T00:00:00.000Z'),
    new Date('2022-02-21T00:00:00.000Z'),
    new Date('2022-05-30T00:00:00.000Z'),
    new Date('2022-06-19T00:00:00.000Z'),
    new Date('2022-07-04T00:00:00.000Z'),
    new Date('2022-09-05T00:00:00.000Z'),
    new Date('2022-10-10T00:00:00.000Z'),
    new Date('2022-11-11T00:00:00.000Z'),
    new Date('2022-11-24T00:00:00.000Z'),
    new Date('2022-12-25T00:00:00.000Z')
  ];
  minDate = new Date('2022-01-01T00:00:00.000Z');
  maxDate = new Date('2022-12-31T00:00:00.000Z');
  disabledDates(data: any) {
    return data.view === 'month' && data.date.getDay() === 0;
  }
  getCellCssClass(date: any, view: any) {
    let cssClass = '';
    this.federalHolidays.forEach((item) => {
      if (date.getDate() === item.getDate() && date.getMonth() === item.getMonth() && view !== 'year') {
        cssClass = 'holiday';
      }
    });

    return cssClass;
  }
}
