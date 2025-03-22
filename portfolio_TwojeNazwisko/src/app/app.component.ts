import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { IGallery } from './interfaces/IGallery';
import { Galleries } from './constants/galleries.constant';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, NgFor, PolishDatePipe,FormsModule]
})

export class AppComponent{
  title: string;
  description: string;
  galleries: IGallery[];
  searchValue: string; 
  
  constructor() {
    this.title = 'Moje podróże';
    this.description = 'Gdzie, kiedy i czemu mnie tam wywiało.';
    this.galleries = Galleries;
    this.searchValue = '';
  }
  onSearchValue(){
    this.galleries = Galleries;
    if (this.searchValue) {
      this.galleries = this.galleries.filter((gallery: IGallery) => (
        (gallery.title.indexOf(this.searchValue) !== -1) || (gallery.description.indexOf(this.searchValue) !== -1)
      ));
    } else {
      this.galleries = Galleries;  
    }
  }
  
}