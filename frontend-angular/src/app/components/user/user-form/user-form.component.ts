import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  user: User = new User();
  clientOperation: string = '';
  isCreateUser: boolean = true;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private routes: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.defineClientOperation();
    this.loadGroups();
    this.initForm();
    
    if(!this.isCreateUser) {
      this.initFormEdit()
      return; 
    } 
  }

  defineClientOperation() {
    if(this.routes.url.includes('editar')) {
      this.clientOperation = "Editar";
      this.isCreateUser = false;
      return;
    }

    this.clientOperation = "Cadastrar";
  }

  loadGroups() {
    this.userService.findAllGroups().subscribe(groups => {
      this.group_list = groups;
    })
  }

  initFormEdit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService.readById(id).subscribe(user => {
      
      this.userFormGroup = this.formBuilder.group({
        id: [this.user.id],
        name: [this.user.name, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        password: [this.user.password, [Validators.required, Validators.minLength(8)]],
        active: [this.user.active, Validators.required],
        group: [this.user.group.id, Validators.required]
      });

      this.userFormGroup.setValue(user);
    });
  }

  initForm() {
    this.userFormGroup = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(8)]],
      active: [this.user.active, Validators.required],
      group: [this.user.group.id, Validators.required]
    });
  }
  
  formBindingFields() {
    const form = this.userFormGroup.value;
    
    this.user.id = form.id;
    this.user.name = form.name;
    this.user.email = form.email;
    this.user.password = form.password;
    this.user.active = form.active;
    this.user.group = form.group;

    console.log("userFormBinding: ", this.user);
    
  }
  
  async submit() {
    this.formBindingFields();
    
    if(!this.userFormGroup.valid) {
      console.log("invalido");
      return;
    } 
    
    if(this.isCreateUser) {
      console.log(this.user);
      this.userService.create(this.user);
    } else {
      console.log("UserEdited: ", this.user);
      
      this.userService.update(this.user);
    }

    this.goToUserList();
  }

  goToUserList(): void{
    this.routes.navigate(['usuario']);
    return;
  }

}
