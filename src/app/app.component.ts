import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-unsplash';
  indexValue: string | undefined;

  setValue(index: string) {
    this.indexValue = index;
  }
}
