import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { PhotosService } from "../photos.service";
import {NewPhoto} from "../interfaces/newPhoto";
import {Observable} from "rxjs";


@Component({
  selector: 'app-masonry-container',
  templateUrl: './masonry-container.component.html',
  styleUrls: ['./masonry-container.component.css']
})
export class MasonryContainerComponent implements OnInit, OnChanges {
  public myOptions: NgxMasonryOptions = {
    gutter: 15,
    columnWidth: ".grid-sizer",
    itemSelector: ".pic--container",
    percentPosition: true,
  };

  photos: Observable<NewPhoto[]> | undefined
  selectedPhotos: Observable<NewPhoto[]> | undefined
  @Input() index: string | undefined;

  constructor(private photoService: PhotosService) {
    this.photos = this.photoService.getPhotos();
  }

  ngOnInit(): void {
        if (this.index) {
          this.selectedPhotos = this.photoService.getSelectedPhotos(this.index);
        }
    }

  deleteThisPhoto(photoId: string) {
    // this.photoService.deleteThisPhoto(photoId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.index) {
      this.selectedPhotos = this.photoService.getSelectedPhotos(this.index);
    } else {
      this.selectedPhotos = this.photos;
    }
  }
}
