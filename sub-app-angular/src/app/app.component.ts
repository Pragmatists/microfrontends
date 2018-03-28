import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sub-app-angular';
  user = {
    username: 'etest@example.com',
    displayName: 'Test Test'
  };

}
