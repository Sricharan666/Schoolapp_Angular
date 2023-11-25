import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schoolapp';
constructor( public rtr : Router){
  
}
  ngOnInit() {
     this.searchpage();
  }
  searchpage(){
    this.rtr.navigate(["search"]);
  }
}
