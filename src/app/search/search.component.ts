import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchForm: FormGroup;
  filteredSchools: any[] = [];
  schools: any[] = [];


  ngOnInit() {
    this.api.getSchools().subscribe(schools => {
      this.schools = schools;
    });
  }

  constructor(private formBuilder: FormBuilder,private api : ApiService , public rtr : Router, private dsr : DataService) {
    this.searchForm = this.formBuilder.group({
      selectedOption: '',
      selectedSchool: ''
    });
  }

  search() {
    const selectedOption = this.searchForm.value.selectedOption;
    const selectedSchool = this.searchForm.value.selectedSchool;
  
    this.filteredSchools = [];
  
    if (selectedSchool && !selectedOption) {
      // Search by school name
      const searchWords = selectedSchool.trim().toLowerCase().split(' ');
      this.filteredSchools = this.schools.filter(school => {
        const schoolWords = school.schoolname.trim().toLowerCase().split(' ');
        return searchWords.every((word: any) => schoolWords.includes(word));
      });
    } else if (!selectedSchool && selectedOption) {
      // Search by location
      const searchWords = selectedOption.trim().toLowerCase().split(' ');
      this.filteredSchools = this.schools.filter(school => {
        const locationWords = school.location.trim().toLowerCase().split(' ');
        return searchWords.every((word: any) => locationWords.includes(word));
      });
    } else if (selectedSchool && selectedOption) {
      // Search by both name and location
      const schoolSearchWords = selectedSchool.trim().toLowerCase().split(' ');
      const locationSearchWords = selectedOption.trim().toLowerCase().split(' ');
      this.filteredSchools = this.schools.filter(school => {
        const schoolWords = school.schoolname.trim().toLowerCase().split(' ');
        const locationWords = school.location.trim().toLowerCase().split(' ');
        return schoolSearchWords.every((word: any) => schoolWords.includes(word)) && locationSearchWords.every((word: any) => locationWords.includes(word));
      });
    }
     this.rtr.navigate(["search"]);
  }
    navigateToSchool(all : any) {
    console.log("this is from search" +all)
    this.rtr.navigate(["info"]);
    this.dsr.getSchool(all);
  }

}
