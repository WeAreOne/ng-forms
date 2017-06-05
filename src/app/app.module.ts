import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostFormReactiveComponent } from './posts/post-form-reactive/post-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
