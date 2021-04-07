import { Component, OnInit } from '@angular/core';
import { faEdit, faUser, faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/administrativo/models/user';
import { UserService } from 'src/app/administrativo/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  editIcon = faUserEdit;
  removeIcon = faUserTimes;
  userIcon = faUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.findAll().subscribe(users => {
      this.users = users;
    });
  }

}
