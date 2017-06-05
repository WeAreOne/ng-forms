import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-form-reactive',
  templateUrl: './post-form-reactive.component.html',
  styleUrls: ['./post-form-reactive.component.css']
})
export class PostFormReactiveComponent implements OnInit {
  categories = [ 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5' ];

  model = new Post(1,
    'This is my post title',
    'Lorem ipsum dolor sit amet...',
    this.categories[0],
    'My tag');

  submitted = false;

  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = fb.group({
      title: fb.control(this.model.title, Validators.required),
      text: fb.control(this.model.text, Validators.required),
      category: fb.control(this.model.category),
      tag: fb.control(this.model.tag)
    });
  }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }
}
