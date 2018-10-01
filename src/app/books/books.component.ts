import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public allBooks;
  public defaultValue: string = "None";
  

  constructor(public httpGotService: GotHttpService) { 
    console.log("Books component constructor called");
  }

  ngOnInit() {
    console.log("books component OnInit called");
    this.allBooks= this.httpGotService.getAllBook().subscribe(
      data=>{
        this.allBooks=data;
        console.log(this.allBooks);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }


}
