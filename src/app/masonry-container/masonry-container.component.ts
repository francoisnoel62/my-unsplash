import { Component} from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { PhotosService } from "../photos.service";
import {NewPhoto} from "../interfaces/newPhoto";
import {Observable} from "rxjs";


@Component({
  selector: 'app-masonry-container',
  templateUrl: './masonry-container.component.html',
  styleUrls: ['./masonry-container.component.css']
})
export class MasonryContainerComponent {
  public myOptions: NgxMasonryOptions = {
    gutter: 15,
    columnWidth: ".grid-sizer",
    itemSelector: ".pic--container",
    percentPosition: true,
  };

  photos: Observable<NewPhoto[]> | undefined

  constructor(private photoService: PhotosService) {
    this.photos = this.photoService.getPhotos()
  }

  deleteThisPhoto(photoId: string) {
    this.photoService.deleteThisPhoto(photoId)
      .then(r => console.log(r));
  }
}
