import { Component } from '@angular/core';

import { UsersService } from './_services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private usesService: UsersService) {
    this.usesService.usersUpdated.subscribe(
      ({ name, type }: { name: string, type: string }) => console.log(`User ${name} has changed his type to an ${type}`)
    );
  }
}
