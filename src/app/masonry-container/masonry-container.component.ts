import { Component, OnInit} from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { PhotosService } from "../photos.service";
import {NewPhoto} from "../interfaces/newPhoto";


@Component({
  selector: 'app-masonry-container',
  templateUrl: './masonry-container.component.html',
  styleUrls: ['./masonry-container.component.css']
})
export class MasonryContainerComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
    gutter: 15,
    columnWidth: ".grid-sizer",
    itemSelector: ".pic--container",
    percentPosition: true,
  };

  photos: NewPhoto[] | undefined;

  constructor(private photoService: PhotosService) {}

  getPhotos(): void {
    this.photoService.getPhotos().subscribe(
      photos => this.photos = photos
    );
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  deleteThisPhoto(photoId: string) {
    this.photoService.deleteThisPhoto(photoId)
      .then(
        r => console.log(r));
  }
}
