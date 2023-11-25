import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fetchedData : any;

  getSchool(school: any){
   this. fetchedData = school;
  }
}
