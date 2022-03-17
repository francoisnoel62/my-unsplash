import { Injectable } from '@angular/core';
import {NewPhoto} from "./interfaces/newPhoto";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private photosCollection: AngularFirestoreCollection<NewPhoto>;
  photos: Observable<NewPhoto[]>;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
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

  uploadPhoto(label:string, selectedFile: File | undefined) {
    const filePath = 'photos/' + Math.random() + selectedFile;
    this.storage.upload(filePath, selectedFile, { customMetadata: { label: label } });
  }

  getSelectedPhotos(index: string) {
    return this.afs.collection<NewPhoto>('photos', ref => ref.where('index', 'array-contains', index))
      .valueChanges();
  }
}
