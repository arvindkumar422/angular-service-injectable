import { Component } from '@angular/core';

import { GroupService } from './group.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  //providers: [ GroupService ] Used @Injectable({providedIn: 'root'}) instead
})
export class AppComponent  {
  name = 'Angular';
}
