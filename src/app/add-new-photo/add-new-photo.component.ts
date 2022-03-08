import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface NewPhoto {
  label: string;
  photo_url: string;
}

@Component({
  selector: 'app-add-new-photo',
  templateUrl: './add-new-photo.component.html',
  styleUrls: ['./add-new-photo.component.css']
})
export class AddNewPhotoComponent {

  constructor(
    public dialogRef: MatDialogRef<AddNewPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewPhoto,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
