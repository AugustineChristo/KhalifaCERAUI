
// @Injectable()
// export class CustomDateTimeAdapter extends DateTimeAdapter<T> {
// }
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

// TODO(mmalerba): See if we can clean this up at some point.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import { default as _rollupMoment, Moment, MomentFormatSpecification, MomentInput } from 'moment';
import { NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { DateTimeAdapter } from 'ng-pick-datetime';

export const CUSTOM_DATE_TIME_FORMATS = {
    parseInput: 'DD/MM/YYYY, HH:mm',
    fullPickerInput: 'your custom value',
    datePickerInput: 'your custom value',
    timePickerInput: 'your custom value',
    monthYearLabel: 'your custom value',
    dateA11yLabel: 'your custom value',
    monthYearA11yLabel: 'your custom value',
};
const moment = _rollupMoment || _moment;

export interface NgxMatMomentDateAdapterOptions {

  strict?: boolean;

  useUtc?: boolean;
}

export const MAT_MOMENT_DATE_ADAPTER_OPTIONS = new InjectionToken<NgxMatMomentDateAdapterOptions>(
  'MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
  });

export function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY(): NgxMatMomentDateAdapterOptions {
  return {
    useUtc: false
  };
}

function range<T>(length: number, valueFunction: (index: number) => T): T[] {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}

@Injectable()
export class CustomNgxDatetimeAdapter extends DateTimeAdapter<Moment> {
    getDay(date: _moment.Moment): number {
        throw new Error('Method not implemented.');
    }
    getHours(date: _moment.Moment): number {
        throw new Error('Method not implemented.');
    }
    getMinutes(date: _moment.Moment): number {
        throw new Error('Method not implemented.');
    }
    getSeconds(date: _moment.Moment): number {
        throw new Error('Method not implemented.');
    }
    getTime(date: _moment.Moment): number {
        throw new Error('Method not implemented.');
    }
    differenceInCalendarDays(dateLeft: _moment.Moment, dateRight: _moment.Moment): number {
        throw new Error('Method not implemented.');
    }
    isEqual(dateLeft: _moment.Moment, dateRight: _moment.Moment): boolean {
        throw new Error('Method not implemented.');
    }
    isSameDay(dateLeft: _moment.Moment, dateRight: _moment.Moment): boolean {
        throw new Error('Method not implemented.');
    }
    setHours(date: _moment.Moment, amount: number): _moment.Moment {
        throw new Error('Method not implemented.');
    }
    setMinutes(date: _moment.Moment, amount: number): _moment.Moment {
        throw new Error('Method not implemented.');
    }
    setSeconds(date: _moment.Moment, amount: number): _moment.Moment {
        throw new Error('Method not implemented.');
    }
    now(): _moment.Moment {
        throw new Error('Method not implemented.');
    }
  
    getYear(date: _moment.Moment): number {
        return this.clone(date).year();
      }
    
      getMonth(date: _moment.Moment): number {
        return this.clone(date).month();
      }
    
      getDate(date: _moment.Moment): number {
        return this.clone(date).date();
      }
    
      getDayOfWeek(date: _moment.Moment): number {
        return this.clone(date).day();
      }
    
      getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
        // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
        return style === 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
      }
    
      getDateNames(): string[] {
        return this._localeData.dates;
      }
    
      getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
        if (style === 'long') {
          return this._localeData.longDaysOfWeek;
        }
        if (style === 'short') {
          return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
      }
    
      getYearName(date: _moment.Moment): string {
        return this.clone(date).format('YYYY');
      }
    
      getFirstDayOfWeek(): number {
        return this._localeData.firstDayOfWeek;
      }
    
      getNumDaysInMonth(date: _moment.Moment): number {
        return this.clone(date).daysInMonth();
      }
    
      clone(date: _moment.Moment): Moment {
        return date.clone().locale(this.locale);
      }
    
      createDate(year: number, month: number, date: number): Moment {
        if (month < 0 || month > 11) {
          throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
    
        if (date < 1) {
          throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
    
        const result = this._createMoment({ year, month, date }).locale(this.locale);
        if (!result.isValid()) {
          throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
    
        return result;
      }
    
      today(): Moment {
        // @ts-ignore
        return this._createMoment().locale(this.locale);
      }
    
      parse(value: any, parseFormat: string | string[]): Moment | null {
        if (value && typeof value === 'string') {
          return this._createMoment(value, parseFormat, this.locale);
        }
        return value ? this._createMoment(value).locale(this.locale) : null;
      }
    
      format(date: _moment.Moment, displayFormat: string): string {
        date = this.clone(date);
        if (!this.isValid(date)) {
          throw Error('MomentDateAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
      }
    
      addCalendarYears(date: _moment.Moment, years: number): Moment {
        return this.clone(date).add({ years });
      }
    
      addCalendarMonths(date: _moment.Moment, months: number): Moment {
        return this.clone(date).add({ months });
      }
    
      addCalendarDays(date: _moment.Moment, days: number): Moment {
        return this.clone(date).add({ days });
      }
    
      toIso8601(date: _moment.Moment): string {
        return this.clone(date).format();
      }
    
      deserialize(value: any): Moment | null {
        let date;
        if (value instanceof Date) {
          date = this._createMoment(value).locale(this.locale);
        } else if (this.isDateInstance(value)) {
          return this.clone(value);
        }
        if (typeof value === 'string') {
          if (!value) {
            return null;
          }
          date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
          return this._createMoment(date).locale(this.locale);
        }
        return super.deserialize(value);
      }
    
      isDateInstance(obj: any): boolean {
        return moment.isMoment(obj);
      }
    
      isValid(date: _moment.Moment): boolean {
        return this.clone(date).isValid();
      }
    
      invalid(): Moment {
        return moment.invalid();
      }
    
      getHour(date: _moment.Moment): number {
        return date.hours();
      }
      getMinute(date: _moment.Moment): number {
        return date.minutes();
      }
      getSecond(date: _moment.Moment): number {
        return date.seconds();
      }
      setHour(date: _moment.Moment, value: number): void {
        date.hours(value);
      }
      setMinute(date: _moment.Moment, value: number): void {
        date.minutes(value)
      }
      setSecond(date: _moment.Moment, value: number): void {
        date.seconds(value);
      }
  private _localeData: {
    firstDayOfWeek: number,
    longMonths: string[],
    shortMonths: string[],
    dates: string[],
    longDaysOfWeek: string[],
    shortDaysOfWeek: string[],
    narrowDaysOfWeek: string[]
  };

  constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string,
              @Optional() @Inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS)
              private _options?: NgxMatMomentDateAdapterOptions) {

    super();
    this.setLocale(dateLocale || moment.locale());
  }

  setLocale(locale: string) {
    super.setLocale(locale);

    const momentLocaleData = moment.localeData(locale);
    this._localeData = {
      firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
      longMonths: momentLocaleData.months(),
      shortMonths: momentLocaleData.monthsShort(),
      dates: range(31, (i) => this.createDate(2017, 0, i + 1).format('D')),
      longDaysOfWeek: momentLocaleData.weekdays(),
      shortDaysOfWeek: momentLocaleData.weekdaysShort(),
      narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
    };
  }


  private _createMoment(
    date: _moment.MomentInput,
    format?: MomentFormatSpecification,
    locale?: string,
  ): Moment {
    const { strict, useUtc }: NgxMatMomentDateAdapterOptions = this._options || {};

    return useUtc
      ? moment.utc(date, format, locale, strict)
      : moment(date, format, locale, strict);
  }
}