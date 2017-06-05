import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  categories = [ 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5' ];

  model = new Post(1,
    'This is my post title',
    'Lorem ipsum dolor sit amet...',
    this.categories[0],
    'My tag');

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  isValid = (field) => field.valid || field.pristine;

  onSubmit() { this.submitted = true; }

  // Only for testing
  get diagnostic() { return JSON.stringify(this.model); }

}
