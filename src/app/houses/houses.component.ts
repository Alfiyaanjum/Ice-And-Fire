import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public allHouses:any[]=[];
  public defaultValue: string = "None";


  constructor(public httpGotService: GotHttpService) {
    console.log("Houses component constructor called");
   }

   ngOnInit() {
    let i;
    console.log("Houses component OnInit called");
    for(i=0;i<9;i++){
    let temp= this.httpGotService.getAllHouse().subscribe(
      data=>{
        temp=data;
        this.allHouses=this.allHouses.concat(temp);
        console.log(this.allHouses);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
   }
  }

}
