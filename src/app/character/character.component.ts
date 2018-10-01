import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public allCharacters:any[]=[];
  public defaultValue: string = "None";
  public filterName:any ={ name: ''};


  constructor(public httpGotService: GotHttpService) { 
    console.log("Character component constructor called");
  }

  ngOnInit() {
    let i;
    for(i=0;i<44;i++){
      let temp= this.httpGotService.getAllCharacter().subscribe(
        data=>{
          //console.log(data);
          temp=data;
          this.allCharacters=this.allCharacters.concat(temp);
          console.log(this.allCharacters);
        },

        error =>{
          console.log("some error occured");
          console.log(error.errorMessage);
        }
      )
  
    }
    
  }
}
