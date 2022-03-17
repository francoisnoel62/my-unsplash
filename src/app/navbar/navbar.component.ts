import {Component, EventEmitter, Output} from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import {AddNewPhotoComponent} from "../add-new-photo/add-new-photo.component";
import {PhotosService} from "../photos.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() indexEmitter = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private photoServ: PhotosService) { }

  addNewPhoto(): void {
    let dialogRef = this.dialog.open(AddNewPhotoComponent, {
      width: '30%'
    });
  }

  getValue(value: string) {
    this.indexEmitter.emit(value);
  }
}
