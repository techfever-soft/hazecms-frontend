import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public timeZoneList = [
    {
      name: 'International Date Line West',
      offset: '-12:00',
    },
    {
      name: 'Coordinated Universal Time-11',
      offset: '-11:00',
    },
    {
      name: 'Hawaii',
      offset: '-10:00',
    },
    {
      name: 'Alaska',
      offset: '-09:00',
    },
    {
      name: 'Pacific Time',
      offset: '-08:00',
    },
    {
      name: 'Mountain Time',
      offset: '-07:00',
    },
    {
      name: 'Central Time',
      offset: '-06:00',
    },
    {
      name: 'Eastern Time',
      offset: '-05:00',
    },
    {
      name: 'Atlantic Time',
      offset: '-04:00',
    },
    {
      name: 'Brasília Time',
      offset: '-03:00',
    },
    {
      name: 'Mid-Atlantic',
      offset: '-02:00',
    },
    {
      name: 'Azores Time',
      offset: '-01:00',
    },
    {
      name: 'Greenwich Mean Time',
      offset: '+00:00',
    },
    {
      name: 'Central European Time',
      offset: '+01:00',
    },
    {
      name: 'Eastern European Time',
      offset: '+02:00',
    },
    {
      name: 'Moscow Time',
      offset: '+03:00',
    },
    {
      name: 'Azerbaijan Time',
      offset: '+04:00',
    },
    {
      name: 'Pakistan Standard Time',
      offset: '+05:00',
    },
    {
      name: 'Bangladesh Standard Time',
      offset: '+06:00',
    },
    {
      name: 'Indochina Time',
      offset: '+07:00',
    },
    {
      name: 'China Standard Time',
      offset: '+08:00',
    },
    {
      name: 'Japan Standard Time',
      offset: '+09:00',
    },
    {
      name: 'Australian Eastern Time',
      offset: '+10:00',
    },
    {
      name: 'Solomon Islands Time',
      offset: '+11:00',
    },
    {
      name: 'New Zealand Standard Time',
      offset: '+12:00',
    },
  ];
  
  constructor() { }

  public getTimeZones(): any[] {
    return this.timeZoneList;
  }
}
