import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AddNewPhotoComponent} from "../add-new-photo/add-new-photo.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  label: string | undefined;
  photo_url: string | undefined;

  constructor(public dialog: MatDialog) { }


  addNewPhoto(): void {
    let dialogRef = this.dialog.open(AddNewPhotoComponent, {
      width: '30%',
      data: {label : this.label, photo_url: this.photo_url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      });
  }
}
