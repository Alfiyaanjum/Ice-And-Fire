import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  public getCharacterDetails:any;
  public characterDetails:any;
  constructor(private _route:ActivatedRoute, private _router: Router,public httpGotService: GotHttpService, public location:Location) { 
    console.log("Character-View component constructor called");
  }

  ngOnInit() {
    let characterNumber = this._route.snapshot.paramMap.get('characterNumber')
    this.getCharacterDetails = this.httpGotService.getSingleCharacter(characterNumber).subscribe(
      

      data =>{
        console.log(this.getCharacterDetails);
        console.log(data);
        this.characterDetails = data;
        
        console.log("Character Details : "+this.characterDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }
  public goBackToPreviousPage():any{
    this.location.back();
  }


}
