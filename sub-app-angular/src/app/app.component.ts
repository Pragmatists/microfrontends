import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sub-app-angular';
  user;
  fakeUser = {
    username: 'etest@example.com',
    displayName: 'Test Test'
  };

  ngOnInit(): void {
    // sessionStorage.setItem('USER', JSON.stringify({
    //   username: 'session@example.com',
    //   displayName: 'Test Session'
    // }));
    this.user = JSON.parse(sessionStorage.getItem('USER') || JSON.stringify(this.fakeUser));
  }

  toggleClock () {
    const event = new Event('toggleClock');
    window.dispatchEvent(event);
  }

}
