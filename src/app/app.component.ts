import { Component } from '@angular/core';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
