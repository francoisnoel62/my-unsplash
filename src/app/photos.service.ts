import { Injectable } from '@angular/core';
import {NewPhoto} from "./interfaces/newPhoto";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private photosCollection: AngularFirestoreCollection<NewPhoto>;
  photos: Observable<NewPhoto[]>;

  constructor(private afs: AngularFirestore) {
    this.photosCollection = afs.collection<NewPhoto>('photos');
    this.photos = this.photosCollection.valueChanges({idField: 'id'});
  }

  getPhotos(): Observable<NewPhoto[]> {
    return this.photos;
  }


  deleteThisPhoto(photoId: string) {
    return this.afs
      .collection('photos')
      .doc(photoId)
      .delete();
  }
}
