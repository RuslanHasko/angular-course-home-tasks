import { Component, OnInit } from '@angular/core';

import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor (private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.usersUpdated.emit({ name: this.users[id], type: 'Inactive' });
    this.userService.setToInactive(id);
  }
}
