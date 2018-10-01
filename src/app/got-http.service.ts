import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GotHttpService {
  public allBooks;
  public baseUrl='https://anapioficeandfire.com/api';
  constructor(private _http:HttpClient) { 
    console.log("Http Service constructor called");
  }

  public getAllBook():any{

    let myResponse = this._http.get(this.baseUrl+"/books?page=1&pageSize=20"); 
  //  console.log(myResponse);
    return myResponse;
  }

  public getAllCharacter():any{

        let myResponse = this._http.get(this.baseUrl+"/characters?page=1&pageSize=50"); 
     //   console.log(myResponse);
        return  myResponse;
      
  }


  public getAllHouse():any{

    let myResponse = this._http.get(this.baseUrl+"/houses?page=6&pageSize=50"); 
   // console.log(myResponse);
    return  myResponse;
  
  }
  public getSingleBook(currentBookNumber):any{
    let myResponse = this._http.get(this.baseUrl+"/books/"+currentBookNumber);
    return myResponse;
  }

  public getSingleHouse(currentHouseNumber):any{
    let myResponse = this._http.get(this.baseUrl+"/houses/"+currentHouseNumber);
    return myResponse;
  }

  public getSingleCharacter(currentCharacterNumber):any{
    let myResponse = this._http.get(this.baseUrl+"/characters/"+currentCharacterNumber);
    return myResponse;
  }
  }
