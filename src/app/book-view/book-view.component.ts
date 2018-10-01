import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  public currentBook:any;

  constructor(private _route:ActivatedRoute, private _router: Router,public httpGotService: GotHttpService, public location:Location) { 
    console.log("Book-View component constructor called");
  }
  ngOnInit() {
    console.log("Book-view ngOnInit called");
    let bookNumber = this._route.snapshot.paramMap.get('bookNumber');
    console.log(bookNumber);
    this.httpGotService.getSingleBook(bookNumber).subscribe(

      data=>{
        this.currentBook=data;
        console.log(this.currentBook);
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
