import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-houses-view',
  templateUrl: './houses-view.component.html',
  styleUrls: ['./houses-view.component.css']
})
export class HousesViewComponent implements OnInit {

  public currentHouse:any;
  constructor(private _route:ActivatedRoute, private _router: Router,public httpGotService: GotHttpService, public location:Location) { 
    console.log("Character-View component constructor called");
  }


  ngOnInit() {
    console.log("house-View ngOnInit called");
    let houseNumber = this._route.snapshot.paramMap.get('houseNumber')
    console.log(houseNumber);

    this.httpGotService.getSingleHouse(houseNumber).subscribe(

      data=>{
        this.currentHouse=data;
        console.log(this.currentHouse);
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )    

  }


  public goBackToPreviousPage():any{
    this.location.back();
  }


}
