import { Component, OnInit } from '@angular/core';

import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor (private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.usersUpdated.emit({ name: this.users[id], type: 'Active' });
    this.userService.setToActive(id);
  }
}
