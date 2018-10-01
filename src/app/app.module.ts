import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
//To use ngModel importing the required files.
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListAllComponent } from './list-all/list-all.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { CharacterComponent } from './character/character.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HousesViewComponent } from './houses-view/houses-view.component';
import { GotHttpService } from './got-http.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { Pipe, PipeTransform } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    BooksComponent,
    HousesComponent,
    CharacterComponent,
    CharacterViewComponent,
    BookViewComponent,
    HousesViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'list-all', pathMatch: 'full' },
      { path: 'list-all', component: ListAllComponent },
      { path: 'books', component: BooksComponent },
      { path: 'books/:bookNumber', component: BookViewComponent },
      { path: 'houses', component: HousesComponent },
      { path: 'houses/:houseNumber', component: HousesViewComponent },
      { path: 'characters', component: CharacterComponent },
      { path: 'characters/:characterNumber', component: CharacterViewComponent },
    ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
