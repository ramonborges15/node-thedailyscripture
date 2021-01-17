import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from 'src/app/database/models/group';
import { User } from 'src/app/database/models/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userFormGroup: FormGroup = this.formBuilder.group({});
  group_list: Group[] = [];
  user: User;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService) {
      this.user = {
        name: '',
        email: '',
        password: '',
        active: false,
        group_id: 2
      }
    }

  ngOnInit(): void {
    this.loadGroups();
    this.initForm();
  }

  loadGroups() {
    this.userService.findAllGroups().subscribe(groups => {
      this.group_list = groups;
    })
  }

  initForm() {
    this.userFormGroup = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required],
      active: [this.user.active, Validators.required],
      group: [this.user.group_id, Validators.required]
    });
  }

}
