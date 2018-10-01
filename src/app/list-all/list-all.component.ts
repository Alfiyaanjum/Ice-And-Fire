import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

// jquery
import * as $ from 'jquery';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  public filterName:any ={ name: ''};
  public allDetails:any = [ ];
  
  // ActivatedRoute and Router declared in constructor
  // service declared in constructor
  constructor(public httpGotService: GotHttpService) {
    console.log("constructor is called");
   }

  ngOnInit() {
    console.log("ALL DETAILS : "+this.allDetails);
    console.log($('.container').text());
    console.log("Home Component Initialized");

    // using method declared in service
  

   this.httpGotService.getAllCharacter().subscribe(

      data =>{
        console.log(data);
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Details1 : "+this.allDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )

  this.httpGotService.getAllHouse().subscribe(

      data =>{
        console.log(data);
        // this.allDetails.push(JSON.stringify(data));
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Details2 : "+this.allDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )

    this.httpGotService.getAllBook().subscribe(

      data =>{
        console.log(data);
        // this.allDetails.push(JSON.stringify(data));
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Details3 : "+this.allDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )

    
    // return this.allDetails;

    
    // setTimeout(()=>{
    //   this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
    // },1000)

    $('html').ready(()=>{
      this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
    })
    
  }

  // code to run after component is destroyed
  ngOnDestroy(){
    console.log("destroyed")
  }

}
