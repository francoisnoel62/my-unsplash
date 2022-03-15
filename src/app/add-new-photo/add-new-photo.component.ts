import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {PhotosService} from "../photos.service";

@Component({
  selector: 'app-add-new-photo',
  templateUrl: './add-new-photo.component.html',
  styleUrls: ['./add-new-photo.component.css']
})
export class AddNewPhotoComponent {

  selectedFile: File | undefined;
  label: string="";

  constructor(
    public dialogRef: MatDialogRef<AddNewPhotoComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: NewPhoto,
    private photoService: PhotosService
  ) {  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit() {
    this.photoService.uploadPhoto(this.label, this.selectedFile);
    this.dialogRef.close();
  }

}
