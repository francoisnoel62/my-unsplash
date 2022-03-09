import { Component, OnInit } from '@angular/core';
import {NewPhoto} from "../interfaces/newPhoto";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import { NgxMasonryOptions } from 'ngx-masonry';


@Component({
  selector: 'app-masonry-container',
  templateUrl: './masonry-container.component.html',
  styleUrls: ['./masonry-container.component.css']
})
export class MasonryContainerComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
    gutter: 20,
    columnWidth: ".grid-sizer",
    itemSelector: ".pic--container",
    percentPosition: true,
  };

  private photosCollection: AngularFirestoreCollection<NewPhoto>;
  photos: Observable<NewPhoto[]>;

  constructor(private afs: AngularFirestore) {
    this.photosCollection = afs.collection<NewPhoto>('photos');
    this.photos = this.photosCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
