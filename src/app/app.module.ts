import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { AddNewPhotoComponent } from './add-new-photo/add-new-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddNewPhotoComponent
  ],
  entryComponents: [AddNewPhotoComponent],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      FormsModule,
      MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
