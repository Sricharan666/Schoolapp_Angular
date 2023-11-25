import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  // Totalinfo : any;
  item: any;
  constructor(private api : ApiService, public rtr : Router, private dsr : DataService){
    
  }
  ngOnInit() {
    // this.api.getSchools().subscribe(schools => {
    //   this.Totalinfo = schools;
    //   console.log(this.Totalinfo);
    // });
this.allData();
  }

  allData(){
   this.item = this.dsr.fetchedData;
   console.log("this data from info" +this.item)
  }

  calculateTotalFee(feeStructure: any[]) {
    if (feeStructure) {
      return feeStructure.reduce((total, fee) => total + parseFloat(fee.amount), 0);
    }
    return 0; 
  }
}

